import { Check, ChevronDown, Download, ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useT, useUiLanguage } from "@/lib/i18n";
import { useSettings } from "@/lib/settings";
import { safeFetch } from "@/lib/safe-fetch";
import { openUrl } from "@/lib/window";
import { downloadDictionary, type DownloadProgress } from "@/lib/mining/dictionary";
import { useLookupLanguage } from "@/lib/mining/lookup-language";
import { wordAudioLanguage } from "@/lib/mining/word-audio-core";
import {
  RECOMMENDED_DICTIONARIES,
  WTY_METADATA_URL,
  githubLatestReleaseUrl,
  isInstalled,
  offerUrl,
  recommendedDictionaries,
  wtyOffers,
  wtySources,
  wtyTargets,
  type DictionaryKind,
  type DictionaryOffer,
  type GithubRelease,
  type WtyMetadata,
} from "@/lib/mining/dictionary-catalog";

const MORE_DICTIONARIES = [
  ["MarvNC's collection", "https://github.com/MarvNC/yomitan-dictionaries"],
  ["yomitan.wiki", "https://yomitan.wiki/dictionaries/"],
] as const;

const KIND_LABELS: Record<DictionaryKind, string> = {
  terms: "Definitions",
  names: "Names",
  kanji: "Kanji",
  frequency: "Frequency",
  pronunciation: "Pronunciation",
  glossary: "Glossary",
};

const selectCls =
  "h-9 min-w-0 max-w-[220px] rounded-lg border border-edge bg-raised px-2.5 text-[12.5px] text-ink outline-none transition-colors focus:border-ink";

type OfferState = { progress?: DownloadProgress; importing?: boolean; error?: string };

// GitHub's API is asked once per repository while Settings is open.
const releases = new Map<string, Promise<GithubRelease>>();
function latestRelease(repo: string): Promise<GithubRelease> {
  let p = releases.get(repo);
  if (!p) {
    p = safeFetch(githubLatestReleaseUrl(repo)).then((r) => {
      if (!r.ok) throw new Error(`GitHub: HTTP ${r.status}`);
      return r.json() as Promise<GithubRelease>;
    });
    p.catch(() => releases.delete(repo));
    releases.set(repo, p);
  }
  return p;
}

let metadataRequest: Promise<WtyMetadata> | null = null;
function wtyMetadata(): Promise<WtyMetadata> {
  metadataRequest ??= safeFetch(WTY_METADATA_URL).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json() as Promise<WtyMetadata>;
  });
  metadataRequest.catch(() => {
    metadataRequest = null;
  });
  return metadataRequest;
}

function useLanguageNames(ui: string): (code: string) => string {
  return useMemo(() => {
    let names: Intl.DisplayNames | null = null;
    try {
      names = new Intl.DisplayNames([ui, "en"], { type: "language" });
    } catch {
      names = null;
    }
    return (code: string) => {
      try {
        const name = names?.of(code);
        return name && name !== code ? `${name} (${code})` : code;
      } catch {
        return code;
      }
    };
  }, [ui]);
}

function formatBytes(n: number): string {
  return n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.round(n / 1024)} KB`;
}

/** Dictionaries offered for download: yomitan.wiki's recommendations and the
 *  Wiktionary ones (wty) for the studied language. */
export function DictionaryDownloads({
  installed,
  onImported,
}: {
  installed: string[];
  onImported: () => void;
}) {
  const t = useT();
  const { settings } = useSettings();
  const ui = useUiLanguage();
  const name = useLanguageNames(ui);
  const lookupIso = wordAudioLanguage(useLookupLanguage(settings)).iso;
  const [open, setOpen] = useState(false);
  const [studied, setStudied] = useState(lookupIso);
  const [explains, setExplains] = useState(ui.split("-")[0]);
  const [meta, setMeta] = useState<WtyMetadata | null>(null);
  const [metaError, setMetaError] = useState(false);
  const [states, setStates] = useState<Record<string, OfferState>>({});

  useEffect(() => {
    if (!open || meta) return;
    let alive = true;
    wtyMetadata()
      .then((m) => alive && setMeta(m))
      .catch(() => alive && setMetaError(true));
    return () => {
      alive = false;
    };
  }, [open, meta]);

  const studiedOptions = useMemo(() => {
    const all = new Set([...Object.keys(RECOMMENDED_DICTIONARIES), studied]);
    if (meta) for (const code of wtySources(meta)) all.add(code);
    return [...all].sort((a, b) => name(a).localeCompare(name(b)));
  }, [meta, studied, name]);
  const recommended = recommendedDictionaries(studied, explains);
  const explainOptions = useMemo(() => {
    const all = new Set([explains, "en", studied]);
    for (const o of RECOMMENDED_DICTIONARIES[studied] ?? []) if (o.explains) all.add(o.explains);
    if (meta) for (const code of wtyTargets(meta, studied)) all.add(code);
    return [...all].sort((a, b) => name(a).localeCompare(name(b)));
  }, [meta, studied, explains, name]);
  const wiktionary = meta ? wtyOffers(meta, studied, explains) : [];

  const patch = (id: string, next: OfferState) => setStates((s) => ({ ...s, [id]: next }));

  const download = async (offer: DictionaryOffer) => {
    patch(offer.id, { progress: { received: 0 } });
    try {
      const url =
        "github" in offer.source
          ? offerUrl(offer, await latestRelease(offer.source.github))
          : offerUrl(offer);
      if (!url) throw new Error(t("The newest release has no such file."));
      await downloadDictionary(url, (progress) => {
        const done = progress.total != null && progress.received >= progress.total;
        patch(offer.id, done ? { importing: true } : { progress });
      });
      patch(offer.id, {});
      onImported();
    } catch (e) {
      patch(offer.id, { error: String(e) });
    }
  };

  const row = (offer: DictionaryOffer) => {
    const state = states[offer.id] ?? {};
    const busy = !!state.progress || !!state.importing;
    const have = isInstalled(offer, installed);
    const pct =
      state.progress?.total && state.progress.total > 0
        ? Math.round((state.progress.received / state.progress.total) * 100)
        : null;
    return (
      <div
        key={offer.id}
        className="flex items-center justify-between gap-3 rounded-xl border border-edge-soft bg-canvas/40 px-4 py-2.5"
      >
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="truncate text-[13.5px] font-medium text-ink">{offer.name}</span>
          <span className="text-[12px] text-ink-subtle">
            {[
              t(KIND_LABELS[offer.kind]),
              offer.explains && offer.explains !== studied
                ? t("in {language}", { language: name(offer.explains) })
                : null,
              offer.size,
            ]
              .filter(Boolean)
              .join(" · ")}
          </span>
          {offer.note && <span className="text-[12px] text-ink-subtle">{t(offer.note)}</span>}
          {state.error && <span className="text-[12px] text-danger">{state.error}</span>}
        </div>
        {have && !busy ? (
          <span className="flex shrink-0 items-center gap-1 text-[12.5px] font-medium text-success">
            <Check size={14} strokeWidth={2.6} />
            {t("Installed")}
          </span>
        ) : (
          <button
            type="button"
            disabled={busy}
            onClick={() => void download(offer)}
            className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-edge-soft px-3 text-[12.5px] font-medium text-ink-muted transition-colors hover:border-edge hover:text-ink disabled:opacity-70"
          >
            {busy ? (
              <Loader2 size={13} className="animate-spin" />
            ) : (
              <Download size={13} strokeWidth={2.4} />
            )}
            {state.importing
              ? t("Importing…")
              : state.progress
                ? pct != null
                  ? `${pct}%`
                  : formatBytes(state.progress.received)
                : t("Download")}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1.5 self-start text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
      >
        <ChevronDown
          size={15}
          strokeWidth={2.2}
          className={`transition-transform ${open ? "" : "-rotate-90"}`}
        />
        {t("Download dictionaries")}
      </button>
      {open && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 text-[12.5px] text-ink-muted">
              {t("Language you study")}
              <select
                value={studied}
                onChange={(e) => setStudied(e.target.value)}
                className={selectCls}
              >
                {studiedOptions.map((code) => (
                  <option key={code} value={code}>
                    {name(code)}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-[12.5px] text-ink-muted">
              {t("Explanations in")}
              <select
                value={explains}
                onChange={(e) => setExplains(e.target.value)}
                className={selectCls}
              >
                {explainOptions.map((code) => (
                  <option key={code} value={code}>
                    {name(code)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {recommended.length > 0 && (
            <>
              <span className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-ink-subtle">
                {t("Recommended")}
              </span>
              {recommended.map(row)}
            </>
          )}

          <span className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-ink-subtle">
            {t("From Wiktionary")}
          </span>
          {metaError ? (
            <span className="text-[12.5px] text-ink-subtle">
              {t("Could not load the Wiktionary dictionary list.")}
            </span>
          ) : !meta ? (
            <span className="text-[12.5px] text-ink-subtle">{t("Loading…")}</span>
          ) : wiktionary.length === 0 ? (
            <span className="text-[12.5px] text-ink-subtle">
              {t("No Wiktionary dictionary for these two languages.")}
            </span>
          ) : (
            wiktionary.map(row)
          )}

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-ink-subtle">
            {t("More dictionaries:")}
            {MORE_DICTIONARIES.map(([label, url]) => (
              <button
                key={url}
                type="button"
                onClick={() => openUrl(url)}
                className="flex items-center gap-1 text-ink-muted underline-offset-2 hover:text-ink hover:underline"
              >
                {t(label)}
                <ExternalLink size={12} strokeWidth={2.2} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
