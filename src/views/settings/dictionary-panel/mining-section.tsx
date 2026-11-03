import { open } from "@tauri-apps/plugin-dialog";
import { Loader2, Plus, Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useSettings } from "@/lib/settings";
import { useT } from "@/lib/i18n";
import {
  deleteDictionary,
  importDictionary,
  listDictionaries,
  setDictionaryEnabled,
  type DictionaryInfo,
} from "@/lib/mining/dictionary";
import { Section, ToggleRow } from "../shared";

const LANGUAGES = [
  ["japanese", "Japanese"],
  ["chinese", "Chinese"],
  ["korean", "Korean"],
  ["english", "English"],
  ["spanish", "Spanish"],
  ["portuguese", "Portuguese"],
  ["french", "French"],
  ["german", "German"],
  ["italian", "Italian"],
  ["dutch", "Dutch"],
  ["swedish", "Swedish"],
  ["norwegian", "Norwegian"],
  ["danish", "Danish"],
  ["finnish", "Finnish"],
  ["polish", "Polish"],
  ["czech", "Czech"],
  ["romanian", "Romanian"],
  ["hungarian", "Hungarian"],
  ["greek", "Greek"],
  ["turkish", "Turkish"],
  ["latin", "Latin"],
  ["russian", "Russian"],
  ["ukrainian", "Ukrainian"],
  ["arabic", "Arabic"],
] as const;

const selectCls =
  "h-9 min-w-0 max-w-[240px] shrink-0 rounded-lg border border-edge bg-raised px-2.5 text-[12.5px] text-ink outline-none transition-colors focus:border-ink";
const inputCls =
  "h-9 min-w-0 rounded-lg border border-edge bg-raised px-2.5 text-[12.5px] text-ink outline-none transition-colors focus:border-ink";
const ghostBtn =
  "flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-edge-soft px-3 text-[12.5px] font-medium text-ink-muted transition-colors hover:border-edge hover:text-ink disabled:opacity-50";
const primaryBtn =
  "flex h-9 shrink-0 items-center gap-2 rounded-lg bg-ink px-4 text-[13px] font-semibold text-canvas transition-transform hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60";

function Row({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-edge-soft bg-canvas/40 px-4 py-3">
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-[14px] font-medium text-ink">{label}</span>
        {sub && <span className="text-[12.5px] text-ink-subtle">{sub}</span>}
      </div>
      {children}
    </div>
  );
}

export function MiningSection() {
  return (
    <>
      <DictionarySection />
      <WordAudioSection />
    </>
  );
}

function DictionarySection() {
  const { settings, update } = useSettings();
  const t = useT();
  const [dicts, setDicts] = useState<DictionaryInfo[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const refresh = useCallback(() => {
    listDictionaries()
      .then(setDicts)
      .catch((e) => setMsg(String(e)));
  }, []);
  useEffect(refresh, [refresh]);

  const pick = async () => {
    const picked = await open({
      multiple: true,
      filters: [{ name: "Yomitan dictionary", extensions: ["zip"] }],
    }).catch(() => null);
    const paths = Array.isArray(picked) ? picked : typeof picked === "string" ? [picked] : [];
    const results: string[] = [];
    for (const p of paths) {
      setBusy(p.split(/[\\/]/).pop() ?? p);
      try {
        results.push(await importDictionary(p));
      } catch (e) {
        results.push(`${p.split(/[\\/]/).pop()}: ${String(e)}`);
      }
    }
    setBusy(null);
    if (results.length) setMsg(results.join("\n"));
    refresh();
  };

  return (
    <Section
      title={t("Subtitle dictionary")}
      subtitle={t(
        "Hover a word in the subtitles to look it up in your Yomitan dictionaries and hear it. Uses Manatan's dictionary engine.",
      )}
    >
      <ToggleRow
        label={t("Look up words in subtitles")}
        sub={t(
          "Works with Harbor's subtitles and with styled (ASS) subtitles drawn by mpv. Image subtitles (PGS) have no text to look up.",
        )}
        value={settings.subLookupEnabled}
        onChange={(v) => update({ subLookupEnabled: v })}
      />
      <ToggleRow
        label={t("Pause while the popup is open")}
        sub={t("Resumes when the popup closes.")}
        value={settings.subLookupPauseOnHover}
        onChange={(v) => update({ subLookupPauseOnHover: v })}
      />
      <ToggleRow
        label={t("Keep the popup open when the mouse leaves")}
        sub={t("The popup (and the pause) stays until you click outside it or press Escape.")}
        value={settings.subLookupStayOpen}
        onChange={(v) => update({ subLookupStayOpen: v })}
      />
      <Row
        label={t("Look up with")}
        sub={t(
          "Hover looks words up as the mouse passes over them. With a key, hold it while hovering (or press it on a word) and plain hovering does nothing. Clicking a word always looks it up.",
        )}
      >
        <select
          value={settings.subLookupScanKey ?? "none"}
          onChange={(e) =>
            update({ subLookupScanKey: e.target.value as typeof settings.subLookupScanKey })
          }
          className={selectCls}
        >
          <option value="none">{t("Hover")}</option>
          <option value="shift">{t("Hold Shift")}</option>
          <option value="ctrl">{t("Hold Ctrl")}</option>
          <option value="alt">{t("Hold Alt")}</option>
        </select>
      </Row>
      {(settings.subLookupScanKey ?? "none") === "none" && (
        <TextRow
          label={t("Scan delay (in milliseconds)")}
          sub={t(
            "Wait before looking up the word under the mouse when no key is required. Lower is faster; higher avoids lookups while the mouse just passes over the subtitle.",
          )}
          value={String(settings.subLookupScanDelayMs ?? 20)}
          placeholder="20"
          narrow
          onCommit={(v) => {
            const n = Math.round(Number(v.trim()));
            update({
              subLookupScanDelayMs:
                Number.isFinite(n) && v.trim() ? Math.max(0, Math.min(1000, n)) : 20,
            });
          }}
        />
      )}
      <ToggleRow
        label={t("Keep subtitles above the seek bar")}
        sub={t(
          "The seek bar covers the lowest subtitle line, so lift the subtitles above it while you look words up.",
        )}
        value={settings.subLookupLiftAboveControls !== false}
        onChange={(v) => update({ subLookupLiftAboveControls: v })}
      />
      <Row label={t("Subtitle size")} sub={t("Same setting as Player → Subtitles.")}>
        <RangeInput
          value={settings.subFontSize}
          min={16}
          max={120}
          suffix="px"
          onChange={(n) => update({ subFontSize: n })}
        />
      </Row>
      <Row label={t("Subtitle height")} sub={t("Distance from the bottom of the video.")}>
        <RangeInput
          value={settings.subMarginY}
          min={0}
          max={100}
          suffix="%"
          onChange={(n) => update({ subMarginY: n })}
        />
      </Row>
      <Row label={t("Subtitle language")} sub={t("Picks the deinflection rules used for lookups.")}>
        <select
          value={settings.subLookupLanguage}
          onChange={(e) => update({ subLookupLanguage: e.target.value })}
          className={selectCls}
        >
          {LANGUAGES.map(([id, label]) => (
            <option key={id} value={id}>
              {t(label)}
            </option>
          ))}
        </select>
      </Row>

      <div className="flex flex-col gap-2">
        {dicts === null ? (
          <span className="text-[12.5px] text-ink-subtle">{t("Loading dictionaries…")}</span>
        ) : dicts.length === 0 ? (
          <span className="text-[12.5px] text-ink-subtle">
            {t("No dictionaries yet. Import Yomitan .zip files such as JMdict or Jitendex.")}
          </span>
        ) : (
          dicts.map((d) => (
            <div
              key={d.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-edge-soft bg-canvas/40 px-4 py-2.5"
            >
              <label className="flex min-w-0 items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={d.enabled}
                  onChange={(e) =>
                    setDictionaryEnabled(d.id, e.target.checked)
                      .then(refresh)
                      .catch((err) => setMsg(String(err)))
                  }
                />
                <span className="truncate text-[13.5px] text-ink">{d.name}</span>
              </label>
              <button
                type="button"
                title={t("Remove")}
                onClick={() =>
                  deleteDictionary(d.id)
                    .then(refresh)
                    .catch((err) => setMsg(String(err)))
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-subtle transition-colors hover:bg-danger/10 hover:text-danger"
              >
                <Trash2 size={14} strokeWidth={2.2} />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={pick} disabled={!!busy} className={primaryBtn}>
          {busy ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Plus size={14} strokeWidth={2.4} />
          )}
          {busy ? t("Importing {name}…", { name: busy }) : t("Import dictionary (.zip)")}
        </button>
      </div>
      {msg && (
        <p className="whitespace-pre-wrap text-[12.5px] leading-relaxed text-ink-muted">{msg}</p>
      )}
    </Section>
  );
}

function TextRow({
  label,
  sub,
  value,
  placeholder,
  secret,
  narrow,
  onCommit,
}: {
  label: string;
  sub?: string;
  value: string;
  placeholder?: string;
  secret?: boolean;
  narrow?: boolean;
  onCommit: (v: string) => void;
}) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);
  return (
    <Row label={label} sub={sub}>
      <input
        type={secret ? "password" : "text"}
        value={draft}
        placeholder={placeholder}
        spellCheck={false}
        autoComplete="off"
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => draft !== value && onCommit(draft)}
        onKeyDown={(e) => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
        className={`${inputCls} ${narrow ? "w-[90px]" : "w-full sm:w-[300px]"}`}
      />
    </Row>
  );
}

function WordAudioSection() {
  const { settings, update } = useSettings();
  const t = useT();
  const pick = async () => {
    const picked = await open({
      multiple: false,
      filters: [{ name: "Local audio database", extensions: ["db"] }],
    }).catch(() => null);
    if (typeof picked === "string") update({ localAudioDbPath: picked });
  };
  return (
    <Section
      title={t("Word audio")}
      subtitle={t(
        "Plays pronunciations from a local-audio-yomichan database (Forvo, NHK16, Shinmeikai8, JPod101). Pick android.db, or entries.db next to its *_files folders. The Flatpak build can only read android.db.",
      )}
    >
      <div className="flex items-center justify-between gap-3 rounded-xl border border-edge-soft bg-canvas/40 px-4 py-3">
        <span className="truncate font-mono text-[13px] text-ink" title={settings.localAudioDbPath}>
          {settings.localAudioDbPath || t("No database selected")}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={pick} className={primaryBtn}>
          {t("Choose database")}
        </button>
        {settings.localAudioDbPath && (
          <button
            type="button"
            onClick={() => update({ localAudioDbPath: "" })}
            className={ghostBtn}
          >
            {t("Clear")}
          </button>
        )}
      </div>
    </Section>
  );
}

function RangeInput({
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex w-48 items-center gap-3">
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (Number.isFinite(n)) onChange(Math.max(min, Math.min(max, n)));
        }}
        className="h-1 w-full appearance-none rounded-full bg-edge-soft accent-ink"
      />
      <span className="w-12 shrink-0 text-right text-[12px] tabular-nums text-ink-muted">
        {value}
        {suffix}
      </span>
    </div>
  );
}
