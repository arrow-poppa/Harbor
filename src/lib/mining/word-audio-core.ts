// Word audio sources, kept free of Tauri and settings imports so they can be tested.

export type WordAudioSourceType =
  | "local"
  | "jpod101"
  | "languagepod101"
  | "jisho"
  | "lingua-libre"
  | "wiktionary"
  | "edge-tts"
  | "custom"
  | "custom-json";

export type WordAudioSource = {
  type: WordAudioSourceType;
  enabled: boolean;
  // custom / custom-json: URL with {term}, {reading} and {language}.
  url?: string;
  // edge-tts: voice id ("" picks one for the lookup language) and what it reads.
  voice?: string;
  speak?: "term" | "reading";
  // edge-tts: only used when no other source has audio for the word.
  onlyAsFallback?: boolean;
};

// The local database keeps working as before; every online source starts off,
// since each one sends the looked-up word to its site.
export const DEFAULT_WORD_AUDIO_SOURCES: WordAudioSource[] = [
  { type: "local", enabled: true },
  { type: "jpod101", enabled: false },
  { type: "languagepod101", enabled: false },
  { type: "jisho", enabled: false },
  { type: "lingua-libre", enabled: false },
  { type: "wiktionary", enabled: false },
  { type: "edge-tts", enabled: false, voice: "", speak: "reading", onlyAsFallback: true },
  { type: "custom", enabled: false, url: "" },
  { type: "custom-json", enabled: false, url: "" },
];

const TYPES = new Set(DEFAULT_WORD_AUDIO_SOURCES.map((s) => s.type));

/** The saved list in the user's order, each type once, missing types appended
 *  from the defaults and unknown entries dropped. */
export function sanitizeWordAudioSources(value: unknown): WordAudioSource[] {
  const out: WordAudioSource[] = [];
  const seen = new Set<WordAudioSourceType>();
  if (Array.isArray(value)) {
    for (const raw of value) {
      if (!raw || typeof raw !== "object") continue;
      const r = raw as Record<string, unknown>;
      const type = r.type as WordAudioSourceType;
      if (!TYPES.has(type) || seen.has(type)) continue;
      seen.add(type);
      const base = DEFAULT_WORD_AUDIO_SOURCES.find((s) => s.type === type)!;
      const source: WordAudioSource = { ...base, enabled: r.enabled === true };
      if ("url" in base) source.url = typeof r.url === "string" ? r.url.trim().slice(0, 2048) : "";
      if ("voice" in base) source.voice = typeof r.voice === "string" ? r.voice.slice(0, 96) : "";
      if ("speak" in base) source.speak = r.speak === "term" ? "term" : "reading";
      if ("onlyAsFallback" in base) source.onlyAsFallback = r.onlyAsFallback !== false;
      out.push(source);
    }
  }
  for (const base of DEFAULT_WORD_AUDIO_SOURCES) {
    if (!seen.has(base.type)) out.push({ ...base });
  }
  return out;
}

/** Moves the source at `index` one place up (-1) or down (+1). */
export function moveWordAudioSource(
  sources: WordAudioSource[],
  index: number,
  delta: -1 | 1,
): WordAudioSource[] {
  const to = index + delta;
  if (index < 0 || index >= sources.length || to < 0 || to >= sources.length) return sources;
  const next = sources.slice();
  [next[index], next[to]] = [next[to], next[index]];
  return next;
}

// Lookup language (settings.subLookupLanguage) → ISO 639-1, ISO 639-3 and the
// LanguagePod101 site, which is "<name>pod101" or "<name>class101".
type LanguageInfo = { iso: string; iso3: string; pod?: { name: string; kind: "pod" | "class" } };

const LANGUAGES: Record<string, LanguageInfo> = {
  japanese: { iso: "ja", iso3: "jpn", pod: { name: "japanese", kind: "pod" } },
  chinese: { iso: "zh", iso3: "zho", pod: { name: "chinese", kind: "class" } },
  korean: { iso: "ko", iso3: "kor", pod: { name: "korean", kind: "class" } },
  english: { iso: "en", iso3: "eng", pod: { name: "english", kind: "class" } },
  spanish: { iso: "es", iso3: "spa", pod: { name: "spanish", kind: "pod" } },
  portuguese: { iso: "pt", iso3: "por", pod: { name: "portuguese", kind: "pod" } },
  french: { iso: "fr", iso3: "fra", pod: { name: "french", kind: "pod" } },
  german: { iso: "de", iso3: "deu", pod: { name: "german", kind: "pod" } },
  italian: { iso: "it", iso3: "ita", pod: { name: "italian", kind: "pod" } },
  dutch: { iso: "nl", iso3: "nld", pod: { name: "dutch", kind: "pod" } },
  swedish: { iso: "sv", iso3: "swe", pod: { name: "swedish", kind: "pod" } },
  norwegian: { iso: "no", iso3: "nor", pod: { name: "norwegian", kind: "class" } },
  danish: { iso: "da", iso3: "dan", pod: { name: "danish", kind: "class" } },
  finnish: { iso: "fi", iso3: "fin", pod: { name: "finnish", kind: "pod" } },
  polish: { iso: "pl", iso3: "pol", pod: { name: "polish", kind: "pod" } },
  czech: { iso: "cs", iso3: "ces", pod: { name: "czech", kind: "class" } },
  romanian: { iso: "ro", iso3: "ron", pod: { name: "romanian", kind: "pod" } },
  hungarian: { iso: "hu", iso3: "hun", pod: { name: "hungarian", kind: "pod" } },
  greek: { iso: "el", iso3: "ell", pod: { name: "greek", kind: "pod" } },
  turkish: { iso: "tr", iso3: "tur", pod: { name: "turkish", kind: "class" } },
  latin: { iso: "la", iso3: "lat" },
  russian: { iso: "ru", iso3: "rus", pod: { name: "russian", kind: "pod" } },
  ukrainian: { iso: "uk", iso3: "ukr" },
  arabic: { iso: "ar", iso3: "ara", pod: { name: "arabic", kind: "pod" } },
};

export function wordAudioLanguage(lookupLanguage: string): LanguageInfo {
  return LANGUAGES[lookupLanguage] ?? LANGUAGES.japanese;
}

const KANA = /^[\p{Script=Hiragana}\p{Script=Katakana}ー・]+$/u;

/** JapanesePod101's direct mp3 link. A kana-only word is sent as kana only. */
export function jpod101Url(term: string, reading: string): string {
  let kanji = term;
  let kana = reading || term;
  if (KANA.test(term) && (!reading || reading === term)) kanji = "";
  const params = new URLSearchParams();
  if (kanji) params.set("kanji", kanji);
  if (kana) params.set("kana", kana);
  return `https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?${params}`;
}

// SHA-256 of the clip JapanesePod101 serves for words it has no recording of.
export const JPOD101_MISSING_AUDIO_SHA256 =
  "ae6398b5a27bc8c0a771df6c907ade794be15518174773c58c7c7ddd17098906";

export function languagePod101Url(lookupLanguage: string): string | null {
  const pod = wordAudioLanguage(lookupLanguage).pod;
  return pod
    ? `https://www.${pod.name}${pod.kind}101.com/learningcenter/reference/dictionary_post`
    : null;
}

/** Fills {term}, {reading} and {language} in a custom source URL. Other braces stay. */
export function fillCustomUrl(
  template: string,
  term: string,
  reading: string,
  lookupLanguage: string,
): string {
  const values: Record<string, string> = {
    term,
    reading,
    language: wordAudioLanguage(lookupLanguage).iso,
  };
  return template.replace(/\{([^}]*)\}/g, (all, key: string) =>
    Object.hasOwn(values, key) ? values[key] : all,
  );
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Wikimedia Commons search for Lingua Libre recordings of `term`. */
export function linguaLibreSearchUrl(term: string, lookupLanguage: string): string {
  const { iso3 } = wordAudioLanguage(lookupLanguage);
  const query = `intitle:/-${escapeRegExp(term)}\\.wav/i incategory:"Lingua_Libre_pronunciation-${iso3}"`;
  return commonsSearchUrl(query);
}

/** Lingua Libre files are "LL-Q<id> (<iso3>)-<user>-<term>.wav". */
export function isLinguaLibreFile(title: string, term: string, lookupLanguage: string): boolean {
  const { iso3 } = wordAudioLanguage(lookupLanguage);
  return new RegExp(
    `^File:LL-Q\\d+\\s+\\(${iso3}\\)-[^/]+-${escapeRegExp(term)}\\.wav$`,
    "iu",
  ).test(title);
}

/** Wikimedia Commons search for Wiktionary recordings of `term`. */
export function wiktionarySearchUrl(term: string, lookupLanguage: string): string {
  const { iso } = wordAudioLanguage(lookupLanguage);
  const query = `intitle:/${iso}(-[a-zA-Z]{2})?-${escapeRegExp(term)}[0-9]*\\.ogg/i`;
  return commonsSearchUrl(query);
}

/** Wiktionary files are "<iso>[-<region>]-<term>[n].ogg". */
export function isWiktionaryFile(title: string, term: string, lookupLanguage: string): boolean {
  const { iso } = wordAudioLanguage(lookupLanguage);
  return new RegExp(`^File:${iso}(-\\w\\w)?-${escapeRegExp(term)}\\d*\\.ogg$`, "iu").test(title);
}

/** The region of a Wiktionary file ("en-US-word.ogg" → "US"), if it has one. */
export function wiktionaryRegion(title: string, lookupLanguage: string): string | null {
  const { iso } = wordAudioLanguage(lookupLanguage);
  const m = new RegExp(`^File:${iso}-(\\w\\w)-`, "iu").exec(title);
  return m ? m[1].toUpperCase() : null;
}

function commonsSearchUrl(query: string): string {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    list: "search",
    srsearch: query,
    srnamespace: "6",
    srlimit: "10",
    origin: "*",
  });
  return `https://commons.wikimedia.org/w/api.php?${params}`;
}

export function commonsFileInfoUrl(title: string): string {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    titles: title,
    prop: "imageinfo",
    iiprop: "user|url",
    origin: "*",
  });
  return `https://commons.wikimedia.org/w/api.php?${params}`;
}

/** Entries of a custom JSON source: {"audioSources": [{"url": "...", "name": "..."}]}. */
export function parseCustomAudioList(json: unknown): { url: string; name?: string }[] {
  const list = (json as { audioSources?: unknown } | null)?.audioSources;
  if (!Array.isArray(list)) return [];
  const out: { url: string; name?: string }[] = [];
  for (const item of list) {
    const url = (item as { url?: unknown } | null)?.url;
    if (typeof url !== "string" || !/^https?:\/\//i.test(url)) continue;
    const name = (item as { name?: unknown }).name;
    out.push(typeof name === "string" && name ? { url, name } : { url });
  }
  return out;
}

/** The Edge TTS voice for a lookup language: the chosen one, else the first
 *  voice of that language. */
export function pickEdgeVoice(
  voices: { id: string; locale: string }[],
  chosen: string | undefined,
  lookupLanguage: string,
): { id: string; locale: string } | null {
  if (chosen) {
    const v = voices.find((x) => x.id === chosen);
    if (v) return v;
  }
  const iso = wordAudioLanguage(lookupLanguage).iso;
  return voices.find((v) => v.locale.toLowerCase().startsWith(`${iso}-`)) ?? null;
}

/** File extension for an audio response, from its type or its URL. */
export function audioExtFor(contentType: string | null, url: string): string {
  const type = (contentType ?? "").toLowerCase();
  if (type.includes("mpeg") || type.includes("mp3")) return "mp3";
  if (type.includes("ogg") || type.includes("opus")) return "ogg";
  if (type.includes("wav")) return "wav";
  if (type.includes("aac") || type.includes("mp4") || type.includes("m4a")) return "m4a";
  if (type.includes("flac")) return "flac";
  const m = /\.([a-z0-9]{2,5})(?:[?#]|$)/i.exec(url);
  return m ? m[1].toLowerCase() : "mp3";
}
