import {
  Check,
  Copy,
  ExternalLink,
  Loader2,
  Plus,
  RotateCw,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSettings, type Settings } from "@/lib/settings";
import {
  addNoteFromLookup,
  findDuplicateNotes,
  findWordNotesEverywhere,
  openNotesInAnki,
  type MiningContext,
} from "@/lib/mining/anki";
import {
  AiCancelledError,
  AiTimeoutError,
  aiCacheKey,
  aiExplainProblem,
  cachedAiExplanation,
  cancelAiExplanation,
  explainWord,
  type AiExplainInput,
} from "@/lib/mining/ai-explain";
import { dictionaryMedia, type DictLookupResult, type DictTerm } from "@/lib/mining/dictionary";
import { glossaryEntryHtml, scopedDictionaryCss } from "@/lib/mining/glossary-html";
import {
  findWordAudioCandidates,
  loadWordAudio,
  playWordAudioData,
  wordAudioConfigured,
  wordAudioSourceEntries,
  type WordAudioCandidate,
} from "@/lib/mining/word-audio";
import { onLookupCommand } from "@/lib/player/lookup-nav";
import { POPUP_BASE_WIDTH, sanitizePopupSize } from "@/lib/player/lookup-popup-size";

const MAX_TERMS = 8;
// Wait this long before an automatic AI request, so sweeping the mouse
// across a subtitle does not fire one per word.
const AI_AUTO_DELAY_MS = 450;

type PopupMining = Omit<MiningContext, "term" | "aiExplanation" | "popupSelection">;

type Props = {
  result: DictLookupResult;
  anchor: DOMRect;
  mining: PopupMining;
  onEnter: () => void;
  // `fromPad`: the controller pointer left, not the mouse.
  onLeave: (fromPad: boolean) => void;
};

export function LookupPopup({ result, anchor, mining, onEnter, onLeave }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Above the subtitle the popup is pinned by its bottom edge, below it by its
  // top edge, so content that arrives later (the AI explanation) grows away
  // from the subtitle and scrolls once it reaches the screen edge.
  const [pos, setPos] = useState<{
    left: number;
    top?: number;
    bottom?: number;
    maxH: number;
  } | null>(null);
  const terms = result.terms.slice(0, MAX_TERMS);
  const { settings } = useSettings();
  const scale = sanitizePopupSize(settings.subLookupPopupSize, 100) / 100;
  const aiInput = useMemo<AiExplainInput | null>(() => {
    const first = terms[0];
    return first ? { target: result.word || first.headword, sentence: mining.sentence } : null;
  }, [terms, result.word, mining.sentence]);
  const aiOn = settings.subLookupAiEnabled;
  const aiProblem = aiOn ? aiExplainProblem(settings) : null;
  const ai = useAiExplanation(aiOn && !aiProblem ? aiInput : null, settings.subLookupAiAuto);
  const termMining = useMemo<Omit<MiningContext, "term">>(
    () => ({ ...mining, aiExplanation: aiOn && !aiProblem ? ai.finalText : undefined }),
    [mining, aiOn, aiProblem, ai.finalText],
  );
  const aiMining = useMemo(() => ({ ...termMining, definitionFromAi: true }), [termMining]);

  useLayoutEffect(() => {
    const place = () => {
      const el = ref.current;
      if (!el) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const w = el.offsetWidth;
      const gap = 10;
      const above = anchor.top - gap;
      const below = vh - anchor.bottom - gap;
      const placeAbove = above >= Math.min(320, below) || above > below;
      const maxH = Math.max(160, Math.min(vh * 0.62, (placeAbove ? above : below) - 12));
      const left = Math.max(12, Math.min(vw - w - 12, anchor.left + anchor.width / 2 - w / 2));
      setPos(
        placeAbove
          ? { left, bottom: vh - anchor.top + gap, maxH }
          : { left, top: anchor.bottom + gap, maxH },
      );
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [anchor, result, scale]);

  // Keyboard and controller lookup bindings (see lookup-nav). The buttons are
  // clicked rather than re-implemented so they keep their own states (busy,
  // duplicate, next voice). Only the first entry's buttons are used.
  const aiRef = useRef(ai);
  aiRef.current = ai;
  const scaleRef = useRef(scale);
  scaleRef.current = scale;
  const aiUsable = aiOn && !aiProblem;
  useEffect(
    () =>
      onLookupCommand((cmd, amount) => {
        const el = ref.current;
        if (!el) return false;
        if (cmd === "anki") el.querySelector<HTMLButtonElement>("[data-hb-anki-add]")?.click();
        else if (cmd === "audio")
          el.querySelector<HTMLButtonElement>("[data-hb-word-audio]:not(:disabled)")?.click();
        else if (cmd === "ai") {
          if (!aiUsable) return false;
          void aiRef.current.generate(aiRef.current.state !== "manual");
        } else if (cmd === "scrollDown" || cmd === "scrollUp") {
          el.scrollBy({ top: (cmd === "scrollDown" ? 1 : -1) * 140 * amount * scaleRef.current });
        } else return false;
        return true;
      }),
    [aiUsable],
  );

  const css = useMemo(() => {
    const byDict = new Map<string, string>();
    for (const t of terms)
      for (const [d, s] of Object.entries(t.styles ?? {})) if (s) byDict.set(d, s);
    return Array.from(byDict, ([d, s]) => scopedDictionaryCss(d, s)).join("\n");
  }, [terms]);

  const host = document.querySelector("[data-harbor-player]") ?? document.body;
  return createPortal(
    <div
      ref={ref}
      role="dialog"
      aria-label="Dictionary"
      onPointerEnter={onEnter}
      onPointerLeave={(e) => onLeave(!e.nativeEvent.isTrusted)}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
      className="hb-lookup-popup pointer-events-auto fixed select-text z-[95] overflow-y-auto overscroll-contain rounded-2xl border border-edge-soft bg-elevated/95 text-ink shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-md"
      style={{
        width: `min(${Math.round(POPUP_BASE_WIDTH * scale)}px, calc(100vw - 24px))`,
        left: pos?.left ?? -9999,
        top: pos ? pos.top : -9999,
        bottom: pos?.bottom,
        maxHeight: pos?.maxH ?? "60vh",
        visibility: pos ? "visible" : "hidden",
      }}
    >
      {css && <style>{css}</style>}
      <style>{POPUP_CSS}</style>
      {/* Zoom the content, not the positioned box, so left/top stay in screen pixels. */}
      <div className="flex flex-col divide-y divide-edge-soft" style={{ zoom: scale }}>
        {aiOn && (
          <AiExplanationBox
            ai={ai}
            problem={aiProblem}
            anki={
              terms[0] && !aiProblem ? (
                <AnkiButton term={terms[0]} mining={aiMining} compact />
              ) : undefined
            }
          />
        )}
        {terms.map((t, i) => (
          <TermEntry key={`${t.headword}|${t.reading}|${i}`} term={t} mining={termMining} />
        ))}
      </div>
    </div>,
    host,
  );
}

function Furigana({ term }: { term: DictTerm }) {
  if (!term.furigana?.length) return <>{term.headword}</>;
  return (
    <>
      {term.furigana.map(([text, rt], i) =>
        rt && rt !== text ? (
          <ruby key={i}>
            {text}
            <rt>{rt}</rt>
          </ruby>
        ) : (
          <span key={i}>{text}</span>
        ),
      )}
    </>
  );
}

type AiState = "manual" | "loading" | "streaming" | "done" | "failed" | "timedOut" | "cancelled";

function useAiExplanation(input: AiExplainInput | null, auto: boolean) {
  const { settings } = useSettings();
  const settingsRef = useRef(settings);
  settingsRef.current = settings;
  const inputKey = input ? aiCacheKey(settings, input) : "";
  const [state, setState] = useState<AiState>("manual");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  // Bumped on every new request or word, so a late answer never paints.
  const gen = useRef(0);

  const generate = useCallback(
    (force = false) => {
      if (!input) return Promise.resolve("");
      const id = ++gen.current;
      setError("");
      if (force) setText("");
      setState("loading");
      return explainWord(settingsRef.current, input, {
        force,
        onText: (t) => {
          if (gen.current !== id || !t) return;
          setText(t);
          setState((s) => (s === "loading" ? "streaming" : s));
        },
      })
        .then((t) => {
          if (gen.current === id) {
            setText(t);
            setState("done");
          }
          return t;
        })
        .catch((e) => {
          if (gen.current === id) {
            if (e instanceof AiCancelledError) setState("cancelled");
            else if (e instanceof AiTimeoutError) setState("timedOut");
            else {
              setError(String(e?.message ?? e));
              setState("failed");
            }
          }
          return "";
        });
    },
    [inputKey],
  );

  useEffect(() => {
    gen.current++;
    setText("");
    setError("");
    if (!input) {
      setState("manual");
      return;
    }
    const cached = cachedAiExplanation(settingsRef.current, input);
    if (cached) {
      setText(cached);
      setState("done");
      return;
    }
    // With auto-generate the request is only briefly deferred: show it as pending.
    setState(auto ? "loading" : "manual");
    const key = inputKey;
    const t = auto ? window.setTimeout(() => void generate(), AI_AUTO_DELAY_MS) : 0;
    return () => {
      window.clearTimeout(t);
      // Another word, or the popup closed: drop the unfinished request.
      if (settingsRef.current.aiExplainCancelPending) cancelAiExplanation(key);
    };
  }, [inputKey, auto]);

  const cancel = useCallback(() => {
    if (inputKey) cancelAiExplanation(inputKey);
  }, [inputKey]);

  // Anki export: the finished text, generating it first if needed.
  const finalText = useCallback(() => generate(false), [generate]);

  return { state, text, error, generate, cancel, finalText };
}

function AiExplanationBox({
  ai,
  problem,
  anki,
}: {
  ai: ReturnType<typeof useAiExplanation>;
  problem: string | null;
  // Adds the word's card with the explanation as its selected definition.
  anki?: React.ReactNode;
}) {
  const busy = ai.state === "loading" || ai.state === "streaming";
  const hasText = (ai.state === "streaming" || ai.state === "done") && !!ai.text;
  return (
    <div data-hb-ai-box="" className="flex flex-col gap-1.5 px-4 py-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-subtle">
          <Sparkles size={12} strokeWidth={2.4} />
          AI Explanation
        </span>
        {!problem && (
          <div className="flex items-center gap-1">
            {anki}
            {busy && (
              <button
                type="button"
                title="Cancel"
                onMouseDown={(e) => e.preventDefault()}
                onClick={ai.cancel}
                className="flex h-6 w-6 items-center justify-center rounded-md text-ink-muted hover:bg-ink/10 hover:text-ink"
              >
                <X size={13} strokeWidth={2.4} />
              </button>
            )}
            <button
              type="button"
              title={ai.state === "manual" ? "Generate explanation" : "Regenerate explanation"}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => void ai.generate(ai.state !== "manual")}
              className="flex h-6 items-center gap-1 rounded-md px-1.5 text-[11px] font-semibold text-ink-muted hover:bg-ink/10 hover:text-ink"
            >
              <RotateCw size={12} strokeWidth={2.4} />
              {ai.state === "manual" ? "Generate" : null}
            </button>
          </div>
        )}
      </div>
      {problem ? (
        <div className="text-[12.5px] text-ink-subtle">
          AI explanation is not available. {problem}
        </div>
      ) : ai.state === "manual" ? (
        <div className="text-[12.5px] text-ink-subtle">
          Automatic generation is off. Use Generate to create it.
        </div>
      ) : ai.state === "loading" ? (
        <div className="flex items-center gap-2 text-[13px] text-ink-muted">
          <Loader2 size={13} className="animate-spin" />
          Generating explanation…
        </div>
      ) : hasText ? (
        <div className="whitespace-pre-wrap text-[14px] leading-relaxed">
          <AiText text={ai.text} />
        </div>
      ) : ai.state === "timedOut" ? (
        <div className="text-[12.5px] text-danger">The AI request timed out. Please try again.</div>
      ) : ai.state === "failed" ? (
        <div className="text-[12.5px] text-danger">
          Failed to generate the AI explanation. {ai.error}
        </div>
      ) : ai.state === "cancelled" ? (
        <div className="text-[12.5px] text-ink-subtle">Cancelled.</div>
      ) : null}
    </div>
  );
}

// Renders **bold** and *italic* from the model's answer; everything else is text.
function AiText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") && p.length > 4 ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : p.startsWith("*") && p.endsWith("*") && p.length > 2 ? (
          <em key={i}>{p.slice(1, -1)}</em>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function TermEntry({ term, mining }: { term: DictTerm; mining: Omit<MiningContext, "term"> }) {
  const { settings } = useSettings();
  const pitches = useMemo(
    () =>
      Array.from(new Set(term.pitchAccents.flatMap((p) => p.pitches.map((x) => x.position)))).slice(
        0,
        4,
      ),
    [term],
  );
  const freqs = term.frequencies.slice(0, 4);

  return (
    <div className="flex flex-col gap-2 px-4 py-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col">
          <span lang="ja" className="text-[26px] font-semibold leading-[1.35] tracking-tight">
            <Furigana term={term} />
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {pitches.map((p) => (
              <span
                key={p}
                className="rounded-md bg-accent/15 px-1.5 py-0.5 text-[11px] font-semibold text-accent"
              >
                [{p}]
              </span>
            ))}
            {term.termTags.slice(0, 5).map((t) => (
              <span
                key={t.name}
                title={t.description || undefined}
                className="rounded-md bg-ink/10 px-1.5 py-0.5 text-[11px] font-medium text-ink-muted"
              >
                {t.name}
              </span>
            ))}
            {freqs.map((f, i) => (
              <span
                key={`${f.dictionaryName}${i}`}
                title={f.dictionaryName}
                className="rounded-md border border-edge-soft px-1.5 py-0.5 text-[11px] text-ink-subtle"
              >
                {shortDict(f.dictionaryName)} {f.value}
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 pt-1">
          {wordAudioConfigured(settings) && <WordAudioButton term={term} />}
          <AnkiButton term={term} mining={mining} />
        </div>
      </div>
      {term.synthetic && (
        <div className="text-[12.5px] text-ink-subtle">Not in your dictionaries.</div>
      )}
      {term.glossary.map((g, i) => (
        <GlossaryBlock
          key={`${g.dictionaryName}${i}`}
          dictionary={g.dictionaryName}
          tags={g.tags}
          content={g.content}
        />
      ))}
    </div>
  );
}

function shortDict(name: string): string {
  return name.replace(/\s*\[.*?\]\s*/g, "").slice(0, 14);
}

function GlossaryBlock({
  dictionary,
  tags,
  content,
}: {
  dictionary: string;
  tags: string[];
  content: unknown[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const html = useMemo(
    () => glossaryEntryHtml(content, { images: true, dictionary }),
    [content, dictionary],
  );

  useEffect(() => {
    const imgs = ref.current?.querySelectorAll<HTMLImageElement>("img[data-hb-path]") ?? [];
    let alive = true;
    imgs.forEach((img) => {
      const d = img.dataset.hbDict ?? dictionary;
      const p = img.dataset.hbPath ?? "";
      dictionaryMedia(d, p)
        .then((url) => {
          if (alive) img.src = url;
        })
        .catch(() => img.remove());
    });
    return () => {
      alive = false;
    };
  }, [html, dictionary]);

  const posTags = tags.filter((t) => !/^\d+$/.test(t));
  return (
    <div className="hb-dict-entry text-[14px] leading-relaxed" data-dictionary={dictionary}>
      <div className="mb-0.5 flex flex-wrap items-center gap-1.5 text-[11px] text-ink-subtle">
        <span className="font-semibold uppercase tracking-[0.08em]">{shortDict(dictionary)}</span>
        {posTags.map((t) => (
          <span key={t} className="rounded bg-ink/10 px-1 text-ink-muted">
            {t}
          </span>
        ))}
      </div>
      <div ref={ref} className="hb-gloss" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

function WordAudioButton({ term }: { term: DictTerm }) {
  const { settings } = useSettings();
  const settingsRef = useRef(settings);
  settingsRef.current = settings;
  // Found on the first press: the online sources are only asked when wanted.
  const [list, setList] = useState<WordAudioCandidate[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [busy, setBusy] = useState(false);
  const [playing, setPlaying] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const sourcesKey = JSON.stringify([settings.wordAudioSources, settings.localAudioDbPath]);

  useEffect(() => {
    setList(null);
    setIdx(0);
    setPlaying(null);
    setErr(null);
    setMenuOpen(false);
  }, [term.headword, term.reading, sourcesKey]);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!(e.target instanceof Node) || !wrapRef.current?.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("pointerdown", onDown, true);
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("pointerdown", onDown, true);
      window.removeEventListener("keydown", onKey, true);
    };
  }, [menuOpen]);

  const play = async () => {
    if (busy) return;
    setBusy(true);
    setErr(null);
    try {
      const found =
        list ?? (await findWordAudioCandidates(settingsRef.current, term.headword, term.reading));
      setList(found);
      // A voice that fails to load is skipped for the next one. Clicking
      // again cycles through the recorded voices; a fallback (Edge TTS) only
      // plays when none of them loads.
      const recorded = found.filter((c) => !c.fallback);
      const fallbacks = found.filter((c) => c.fallback);
      const pools = recorded.length ? [recorded, fallbacks] : [fallbacks];
      for (const [p, pool] of pools.entries()) {
        const from = p === 0 ? idx : 0;
        for (let step = 0; step < pool.length; step++) {
          const at = (from + step) % pool.length;
          try {
            await playWordAudioData(await loadWordAudio(pool[at]));
            setPlaying(pool[at].label);
            if (p === 0) setIdx((at + 1) % pool.length);
            return;
          } catch {
            /* next voice */
          }
        }
      }
      setErr("No audio found for this word");
    } catch (e) {
      setErr(String(e));
    } finally {
      setBusy(false);
    }
  };

  const none = list !== null && list.length === 0;
  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        data-hb-word-audio=""
        disabled={none}
        title={
          err ??
          (none
            ? "No audio found for this word"
            : playing
              ? `${playing} — click again for the next voice, right-click for the sources`
              : "Play the word. Right-click for the sources.")
        }
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => void play()}
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuOpen((o) => !o);
        }}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-edge-soft text-ink-muted transition-colors hover:border-edge hover:text-ink disabled:opacity-35"
      >
        {busy ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Volume2 size={15} strokeWidth={2.2} />
        )}
      </button>
      {menuOpen && <WordAudioMenu term={term} settings={settings} />}
    </div>
  );
}

type AudioRowStatus = "busy" | "ok" | "none";

async function audioLoads(candidate: WordAudioCandidate): Promise<boolean> {
  try {
    await loadWordAudio(candidate);
    return true;
  } catch {
    return false;
  }
}

// The enabled sources, like Yomitan's audio menu: a source plays its first
// voice, and a source with several voices lists each of them.
function WordAudioMenu({ term, settings }: { term: DictTerm; settings: Settings }) {
  // The menu closes when the word or the sources change, so these stay put while it is open.
  const [entries] = useState(() => wordAudioSourceEntries(settings, term.headword, term.reading));
  const [found, setFound] = useState<Record<number, WordAudioCandidate[]>>({});
  const [status, setStatus] = useState<Record<string, AudioRowStatus>>({});
  const mark = (key: string, s: AudioRowStatus) => setStatus((m) => ({ ...m, [key]: s }));

  // Every source is checked as the menu opens, so each row already shows
  // whether it has audio. Lists and loaded audio are cached, so what the
  // audio button already fetched is not fetched again. Fallback sources
  // (Edge TTS) are only checked when no other source has audio, so opening
  // the menu does not synthesize speech for nothing; a click still plays them.
  useEffect(() => {
    let alive = true;
    const set = (key: string, s: AudioRowStatus) => {
      if (alive) setStatus((m) => ({ ...m, [key]: s }));
    };
    const check = async (i: number): Promise<boolean> => {
      set(String(i), "busy");
      const candidates = await entries[i].candidates();
      if (!alive) return false;
      setFound((f) => ({ ...f, [i]: candidates }));
      if (candidates.length < 2) {
        const ok = candidates.length === 1 && (await audioLoads(candidates[0]));
        set(String(i), ok ? "ok" : "none");
        return ok;
      }
      const loaded = await Promise.all(
        candidates.map(async (candidate, k) => {
          set(`${i}:${k}`, "busy");
          const ok = await audioLoads(candidate);
          set(`${i}:${k}`, ok ? "ok" : "none");
          return ok;
        }),
      );
      return loaded.some(Boolean);
    };
    const indexes = entries.map((_, i) => i);
    void Promise.all(indexes.filter((i) => !entries[i].fallback).map(check)).then((found) => {
      if (alive && !found.some(Boolean)) indexes.filter((i) => entries[i].fallback).forEach(check);
    });
    return () => {
      alive = false;
    };
  }, [entries]);

  const playFrom = async (key: string, candidates: WordAudioCandidate[]) => {
    for (const c of candidates) {
      try {
        await playWordAudioData(await loadWordAudio(c));
        mark(key, "ok");
        return;
      } catch {
        /* next voice */
      }
    }
    mark(key, "none");
  };

  // A click while a row is still being checked waits for it and then plays.
  const playSource = async (i: number) => {
    const key = String(i);
    mark(key, "busy");
    const candidates = await entries[i].candidates();
    setFound((f) => ({ ...f, [i]: candidates }));
    await playFrom(key, candidates);
  };

  const playVoice = async (i: number, k: number) => {
    const key = `${i}:${k}`;
    mark(key, "busy");
    await playFrom(key, [found[i][k]]);
  };

  const rows: { key: string; label: string; onClick: () => void }[] = [];
  entries.forEach((entry, i) => {
    const voices = found[i];
    if (!voices || voices.length < 2) {
      rows.push({ key: String(i), label: entry.name, onClick: () => void playSource(i) });
      return;
    }
    voices.forEach((v, k) => {
      const same = voices.filter((x) => x.label === v.label).length > 1;
      rows.push({
        key: `${i}:${k}`,
        label: same ? `${v.label} ${k + 1}` : v.label,
        onClick: () => void playVoice(i, k),
      });
    });
  });

  return (
    <div
      role="menu"
      className="absolute right-0 top-full z-10 mt-1 flex min-w-[190px] flex-col rounded-lg border border-edge-soft bg-elevated py-1 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
    >
      {rows.map((row) => {
        const s = status[row.key];
        return (
          <button
            key={row.key}
            type="button"
            role="menuitem"
            onMouseDown={(e) => e.preventDefault()}
            onClick={row.onClick}
            title={s === "none" ? "No audio found for this word" : undefined}
            className={`flex items-center gap-2 px-3 py-1.5 text-left text-[13px] transition-colors hover:bg-ink/10 ${
              s === "none" ? "text-ink-subtle" : "text-ink"
            }`}
          >
            <span className="flex w-3.5 shrink-0 justify-center">
              {s === "busy" ? (
                <Loader2 size={12} className="animate-spin" />
              ) : s === "ok" ? (
                <Check size={12} strokeWidth={2.6} className="text-success" />
              ) : s === "none" ? (
                <X size={12} strokeWidth={2.6} className="text-danger" />
              ) : null}
            </span>
            <span className="min-w-0 truncate">{row.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Notes added from any Anki button, so the entry's button and the AI
// explanation's button show the same cards for a word.
const noteAddedListeners = new Set<(word: string, noteId: number) => void>();
const wordKey = (term: DictTerm) => `${term.headword}\u0000${term.reading}`;

function AnkiButton({
  term,
  mining,
  compact,
}: {
  term: DictTerm;
  mining: Omit<MiningContext, "term">;
  // The AI explanation's button, next to Regenerate, in that box's style.
  compact?: boolean;
}) {
  const { settings } = useSettings();
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [msg, setMsg] = useState(
    compact ? "Add to Anki with the AI explanation as the selected definition" : "Add to Anki",
  );
  // Notes already in the deck for this word (Anki's duplicate rule: same
  // first field), plus any added from this popup.
  const [notes, setNotes] = useState<number[]>([]);
  // Notes with this word in any deck, when the count covers every deck.
  const [everywhere, setEverywhere] = useState<number[] | null>(null);
  const countAll = settings.ankiNoteCount === "all";

  useEffect(() => {
    let alive = true;
    setNotes([]);
    setEverywhere(null);
    findDuplicateNotes(settings, { ...mining, term })
      .then((ids) => alive && setNotes(ids))
      .catch(() => {});
    if (countAll)
      findWordNotesEverywhere(settings, term)
        .then((ids) => alive && setEverywhere(ids))
        .catch(() => {});
    return () => {
      alive = false;
    };
    // Re-check only when the word or the deck/note type changes.
  }, [
    term.headword,
    term.reading,
    mining.sentence,
    settings.ankiDeck,
    settings.ankiModel,
    settings.ankiUrl,
    countAll,
  ]);

  useEffect(() => {
    const key = wordKey(term);
    const onAdded = (word: string, noteId: number) => {
      if (word !== key) return;
      setNotes((n) => (n.includes(noteId) ? n : [...n, noteId]));
      setEverywhere((n) => (n && !n.includes(noteId) ? [...n, noteId] : n));
    };
    noteAddedListeners.add(onAdded);
    return () => {
      noteAddedListeners.delete(onAdded);
    };
  }, [term.headword, term.reading]);

  const duplicate = notes.length > 0 && state !== "done";
  const blocked = duplicate && !settings.ankiAllowDuplicates;

  const add = async () => {
    if (state === "busy") return;
    if (blocked) {
      void openNotesInAnki(settings, notes).catch((e) => {
        setState("error");
        setMsg(String(e).replace(/^Error:\s*/, ""));
      });
      return;
    }
    setState("busy");
    setMsg("Adding…");
    const startedAt = performance.now();
    try {
      const res = await addNoteFromLookup(settings, {
        ...mining,
        term,
        popupSelection: selectionInPopup(),
      });
      const took = `${Math.round(performance.now() - startedAt)} ms`;
      setState("done");
      for (const notify of noteAddedListeners) notify(wordKey(term), res.noteId);
      setMsg(
        res.warnings.length
          ? `Added, with issues: ${res.warnings.join("; ")} · ${took}`
          : `Added to Anki · ${took}`,
      );
    } catch (e) {
      setState("error");
      setMsg(String(e).replace(/^Error:\s*/, ""));
    }
  };

  // Every note with the word, counting the ones in the mining deck once.
  const total = everywhere ? new Set([...everywhere, ...notes]).size : null;
  const count =
    total != null && total > 0
      ? `${notes.length} · ${total}`
      : notes.length > 0
        ? String(notes.length)
        : "";
  const countTitle =
    total != null && total > 0 ? `${notes.length} in this deck, ${total} in all decks. ` : "";
  const title =
    countTitle +
    (state === "idle" && duplicate
      ? blocked
        ? `Already in your deck (${notes.length}). Click to open it in Anki.`
        : `Already in your deck (${notes.length}). Click to add another card.`
      : msg);
  const icon = compact ? 12 : 14;

  return (
    <div className="flex items-center gap-1">
      {notes.length > 0 && (
        <button
          type="button"
          title={
            notes.length > 1 ? `Open the ${notes.length} notes in Anki` : "Open the note in Anki"
          }
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => void openNotesInAnki(settings, notes).catch(() => {})}
          className={
            compact
              ? "flex h-6 w-6 items-center justify-center rounded-md text-ink-muted hover:bg-ink/10 hover:text-ink"
              : "flex h-8 w-8 items-center justify-center rounded-lg border border-edge-soft text-ink-muted transition-colors hover:border-edge hover:text-ink"
          }
        >
          <ExternalLink size={icon} strokeWidth={2.2} />
        </button>
      )}
      <button
        type="button"
        // Keep a text selection made in the popup: it can be exported to Anki.
        onMouseDown={(e) => e.preventDefault()}
        onClick={add}
        data-hb-anki-add={compact ? undefined : ""}
        title={title}
        aria-label={compact ? title : undefined}
        className={`flex items-center gap-1 font-semibold transition-colors ${
          compact ? "h-6 rounded-md px-1.5 text-[11px]" : "h-8 rounded-lg px-2.5 text-[12px]"
        } ${
          state === "done"
            ? "bg-success/20 text-success"
            : state === "error"
              ? "bg-danger/15 text-danger"
              : duplicate
                ? "bg-amber-300/20 text-amber-300 hover:bg-amber-300/30"
                : compact
                  ? "text-ink-muted hover:bg-ink/10 hover:text-ink"
                  : "bg-ink text-canvas hover:opacity-90"
        }`}
      >
        {state === "busy" ? (
          <Loader2 size={icon} className="animate-spin" />
        ) : state === "done" ? (
          <Check size={icon} strokeWidth={2.6} />
        ) : duplicate ? (
          <Copy size={icon} strokeWidth={2.4} />
        ) : (
          <Plus size={icon} strokeWidth={2.6} />
        )}
        Anki
        {count && <span className="font-medium opacity-80">· {count}</span>}
      </button>
    </div>
  );
}

function selectionInPopup(): string {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) return "";
  const node = sel.anchorNode;
  const el = node && (node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement);
  if (!el?.closest(".hb-lookup-popup")) return "";
  return sel.toString().trim();
}

const POPUP_CSS = `
.hb-lookup-popup rt { font-size: 0.42em; font-weight: 500; opacity: 0.8; }
.hb-gloss ul, .hb-gloss ol { padding-inline-start: 1.25em; margin: 0.15em 0; }
.hb-gloss ul { list-style: disc; }
.hb-gloss ol { list-style: decimal; }
.hb-gloss table { border-collapse: collapse; margin: 0.25em 0; }
.hb-gloss td, .hb-gloss th { border: 1px solid var(--color-edge-soft); padding: 0.1em 0.35em; }
.hb-gloss .hb-dict-img { display: inline-block; max-width: 100%; vertical-align: middle; }
.hb-gloss .hb-dict-link { text-decoration: underline; text-underline-offset: 2px; }
.hb-gloss details > summary { cursor: pointer; color: var(--color-ink-muted); }
`;
