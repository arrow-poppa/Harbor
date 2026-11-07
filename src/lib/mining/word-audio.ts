import { fetchEdgeNarrationVoices, synthesizeNarration } from "@/lib/ebook/narration";
import { FINAL_URL_HEADER, safeFetch, safeFetchBytes, safeFetchLocal } from "@/lib/safe-fetch";
import type { Settings } from "@/lib/settings";
import { audioExtension, findWordAudio, wordAudioDataUrl } from "./local-audio";
import {
  JPOD101_MISSING_AUDIO_SHA256,
  audioExtFor,
  commonsFileInfoUrl,
  fillCustomUrl,
  isLinguaLibreFile,
  isWiktionaryFile,
  jpod101Url,
  languagePod101Url,
  linguaLibreSearchUrl,
  parseCustomAudioList,
  pickEdgeVoice,
  sanitizeWordAudioSources,
  wiktionaryRegion,
  wiktionarySearchUrl,
  type WordAudioSource,
  type WordAudioSourceType,
} from "./word-audio-core";

export type WordAudio = { dataBase64: string; ext: string; mime: string };

export type WordAudioCandidate = {
  source: WordAudioSourceType;
  label: string;
  load: () => Promise<WordAudio>;
  // Only used when no other source has audio (Edge TTS by default).
  fallback?: boolean;
};

const FETCH_TIMEOUT_MS = 12_000;
const MAX_AUDIO_BYTES = 8 * 1024 * 1024;

export const WORD_AUDIO_SOURCE_NAMES: Record<WordAudioSourceType, string> = {
  local: "Local audio database",
  jpod101: "JapanesePod101",
  languagepod101: "LanguagePod101",
  jisho: "Jisho.org",
  "lingua-libre": "Lingua Libre",
  wiktionary: "Wiktionary",
  "edge-tts": "Edge TTS",
  custom: "Custom URL",
  "custom-json": "Custom URL (JSON)",
};

function enabledSources(settings: Settings): WordAudioSource[] {
  return sanitizeWordAudioSources(settings.wordAudioSources).filter(
    (s) => s.enabled && (s.type !== "local" || !!settings.localAudioDbPath),
  );
}

/** Whether any source can be asked for word audio. */
export function wordAudioConfigured(settings: Settings): boolean {
  return enabledSources(settings).length > 0;
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(binary);
}

async function sha256Hex(buf: ArrayBuffer): Promise<string> {
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", buf));
  return Array.from(digest, (b) => b.toString(16).padStart(2, "0")).join("");
}

const MIME: Record<string, string> = {
  mp3: "audio/mpeg",
  ogg: "audio/ogg",
  wav: "audio/wav",
  m4a: "audio/mp4",
  flac: "audio/flac",
};

async function fetchAudio(
  url: string,
  source: WordAudioSourceType,
  allowLocalNetwork = false,
): Promise<WordAudio> {
  const res = await safeFetchBytes(
    url,
    undefined,
    FETCH_TIMEOUT_MS,
    MAX_AUDIO_BYTES,
    allowLocalNetwork,
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const type = res.headers.get("content-type");
  if (type && /text\/html|json/i.test(type)) throw new Error("Not an audio file");
  const buf = await res.arrayBuffer();
  if (!buf.byteLength) throw new Error("Empty audio");
  if (source === "jpod101" && (await sha256Hex(buf)) === JPOD101_MISSING_AUDIO_SHA256) {
    throw new Error("No recording of this word");
  }
  const ext = audioExtFor(type, res.headers.get(FINAL_URL_HEADER) ?? url);
  return {
    dataBase64: bytesToBase64(new Uint8Array(buf)),
    ext,
    mime: type && type.startsWith("audio/") ? type : (MIME[ext] ?? "audio/mpeg"),
  };
}

async function fetchText(url: string, init?: RequestInit): Promise<{ text: string; url: string }> {
  const res = await safeFetch(url, init);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return { text: await res.text(), url: res.headers.get(FINAL_URL_HEADER) ?? url };
}

function html(text: string): Document {
  return new DOMParser().parseFromString(text, "text/html");
}

function urlCandidate(
  source: WordAudioSourceType,
  url: string,
  label: string,
  allowLocalNetwork = false,
): WordAudioCandidate {
  return { source, label, load: () => fetchAudio(url, source, allowLocalNetwork) };
}

async function languagePod101(
  term: string,
  reading: string,
  language: string,
): Promise<WordAudioCandidate[]> {
  const endpoint = languagePod101Url(language);
  if (!endpoint) return [];
  const body = new URLSearchParams({
    post: "dictionary_reference",
    match_type: "exact",
    search_query: term,
    vulgar: "true",
  });
  const page = await fetchText(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const doc = html(page.text);
  const urls = new Set<string>();
  for (const row of Array.from(doc.querySelectorAll(".dc-result-row"))) {
    const src = row.querySelector("audio source")?.getAttribute("src");
    if (!src) continue;
    if (language === "japanese") {
      const kana = row.querySelector(".dc-vocab_kana")?.textContent?.trim();
      if (!kana || (reading && reading !== term && kana !== reading)) continue;
    } else if (row.querySelector(".dc-vocab")?.textContent?.trim() !== term) continue;
    try {
      urls.add(new URL(src, page.url).href);
    } catch {
      /* malformed link */
    }
  }
  return [...urls].map((u) => urlCandidate("languagepod101", u, "LanguagePod101"));
}

async function jisho(term: string, reading: string): Promise<WordAudioCandidate[]> {
  const page = await fetchText(`https://jisho.org/search/${encodeURIComponent(term)}`);
  const audio = html(page.text).getElementById(`audio_${term}:${reading || term}`);
  const src = audio?.querySelector("source")?.getAttribute("src");
  if (!src) return [];
  return [urlCandidate("jisho", new URL(src, page.url).href, "Jisho.org")];
}

type CommonsSearch = { query?: { search?: { title: string }[] } };
type CommonsInfo = {
  query?: { pages?: Record<string, { imageinfo?: { url: string; user: string }[] }> };
};

async function commons(
  source: "lingua-libre" | "wiktionary",
  term: string,
  language: string,
): Promise<WordAudioCandidate[]> {
  const searchUrl =
    source === "lingua-libre"
      ? linguaLibreSearchUrl(term, language)
      : wiktionarySearchUrl(term, language);
  const found = JSON.parse((await fetchText(searchUrl)).text) as CommonsSearch;
  const titles = (found.query?.search ?? [])
    .map((r) => r.title)
    .filter((title) =>
      source === "lingua-libre"
        ? isLinguaLibreFile(title, term, language)
        : isWiktionaryFile(title, term, language),
    );
  const name = WORD_AUDIO_SOURCE_NAMES[source];
  const lists = await Promise.all(
    titles.map(async (title) => {
      const info = JSON.parse((await fetchText(commonsFileInfoUrl(title))).text) as CommonsInfo;
      return Object.values(info.query?.pages ?? {}).flatMap((page) => {
        const file = page.imageinfo?.[0];
        if (!file?.url) return [];
        const region = source === "wiktionary" ? wiktionaryRegion(title, language) : null;
        const who = [region, file.user].filter(Boolean).join(" · ");
        return [urlCandidate(source, file.url, who ? `${name} (${who})` : name)];
      });
    }),
  );
  return lists.flat();
}

let ttsRequest = 0;

async function edgeTts(
  source: WordAudioSource,
  term: string,
  reading: string,
  language: string,
): Promise<WordAudioCandidate[]> {
  const voice = pickEdgeVoice(await fetchEdgeNarrationVoices(), source.voice, language);
  if (!voice) return [];
  const text = source.speak === "reading" && reading ? reading : term;
  return [
    {
      source: "edge-tts",
      label: `Edge TTS (${voice.id})`,
      fallback: isFallbackSource(source),
      load: async () => {
        const { blob } = await synthesizeNarration(
          `word-audio-${Date.now()}-${++ttsRequest}`,
          text,
          voice.id,
          voice.locale,
          () => {},
        );
        return {
          dataBase64: bytesToBase64(new Uint8Array(await blob.arrayBuffer())),
          ext: "mp3",
          mime: "audio/mpeg",
        };
      },
    },
  ];
}

async function customJson(url: string): Promise<WordAudioCandidate[]> {
  const res = await safeFetchLocal(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return parseCustomAudioList(await res.json()).map((entry) =>
    urlCandidate(
      "custom-json",
      entry.url,
      entry.name ?? WORD_AUDIO_SOURCE_NAMES["custom-json"],
      true,
    ),
  );
}

async function localDatabase(
  dbPath: string,
  term: string,
  reading: string,
): Promise<WordAudioCandidate[]> {
  const entries = await findWordAudio(dbPath, term, reading);
  return entries.map((entry) => ({
    source: "local" as const,
    label: entry.label,
    load: async () => {
      const url = await wordAudioDataUrl(dbPath, entry);
      const comma = url.indexOf(",");
      const mime = /^data:([^;,]+)/.exec(url)?.[1] ?? "audio/mpeg";
      return { dataBase64: url.slice(comma + 1), ext: audioExtension(entry.file), mime };
    },
  }));
}

function sourceCandidates(
  source: WordAudioSource,
  settings: Settings,
  term: string,
  reading: string,
  language: string,
): Promise<WordAudioCandidate[]> {
  switch (source.type) {
    case "local":
      return localDatabase(settings.localAudioDbPath, term, reading);
    case "jpod101":
      return Promise.resolve(
        language === "japanese"
          ? [urlCandidate("jpod101", jpod101Url(term, reading), "JapanesePod101")]
          : [],
      );
    case "languagepod101":
      return languagePod101(term, reading, language);
    case "jisho":
      return language === "japanese" ? jisho(term, reading) : Promise.resolve([]);
    case "lingua-libre":
    case "wiktionary":
      return commons(source.type, term, language);
    case "edge-tts":
      return edgeTts(source, term, reading, language);
    case "custom":
      return Promise.resolve(
        source.url
          ? [
              urlCandidate(
                "custom",
                fillCustomUrl(source.url, term, reading, language),
                WORD_AUDIO_SOURCE_NAMES.custom,
                true,
              ),
            ]
          : [],
      );
    case "custom-json":
      return source.url
        ? customJson(fillCustomUrl(source.url, term, reading, language))
        : Promise.resolve([]);
  }
}

const listCache = new Map<string, Promise<WordAudioCandidate[]>>();

function cachedSourceCandidates(
  source: WordAudioSource,
  settings: Settings,
  term: string,
  reading: string,
  language: string,
): Promise<WordAudioCandidate[]> {
  const key = JSON.stringify([source, settings.localAudioDbPath, language, term, reading]);
  let list = listCache.get(key);
  if (!list) {
    list = sourceCandidates(source, settings, term, reading, language).catch(() => []);
    listCache.set(key, list);
    if (listCache.size > 256) {
      const oldest = listCache.keys().next().value;
      if (oldest !== undefined) listCache.delete(oldest);
    }
  }
  return list;
}

export type WordAudioSourceEntry = {
  type: WordAudioSourceType;
  name: string;
  // Asked only when no other source has audio for the word.
  fallback: boolean;
  candidates: () => Promise<WordAudioCandidate[]>;
};

function isFallbackSource(source: WordAudioSource): boolean {
  return source.type === "edge-tts" && source.onlyAsFallback !== false;
}

/** The enabled sources in the user's order, fallback sources last. A source
 *  is only asked when its candidates are wanted; a source that fails or has
 *  nothing gives none. */
export function wordAudioSourceEntries(
  settings: Settings,
  term: string,
  reading: string,
): WordAudioSourceEntry[] {
  const language = settings.subLookupLanguage || "japanese";
  const entries = enabledSources(settings).map((s) => ({
    type: s.type,
    name: WORD_AUDIO_SOURCE_NAMES[s.type],
    fallback: isFallbackSource(s),
    candidates: () => cachedSourceCandidates(s, settings, term, reading, language),
  }));
  return [...entries.filter((e) => !e.fallback), ...entries.filter((e) => e.fallback)];
}

/** Every voice the enabled sources have for a word, in the sources' order
 *  with fallback sources last. Listing a fallback costs nothing: Edge TTS
 *  only synthesizes when its candidate is loaded. */
export function findWordAudioCandidates(
  settings: Settings,
  term: string,
  reading: string,
): Promise<WordAudioCandidate[]> {
  return Promise.all(
    wordAudioSourceEntries(settings, term, reading).map((e) => e.candidates()),
  ).then((lists) => lists.flat());
}

const audioCache = new WeakMap<WordAudioCandidate, Promise<WordAudio>>();

/** Loads one candidate's audio once; a failed load can be retried. */
export function loadWordAudio(candidate: WordAudioCandidate): Promise<WordAudio> {
  let p = audioCache.get(candidate);
  if (!p) {
    p = candidate.load();
    p.catch(() => audioCache.delete(candidate));
    audioCache.set(candidate, p);
  }
  return p;
}

/** The first voice that actually loads, for Anki's word audio field. */
export async function firstWordAudio(
  settings: Settings,
  term: string,
  reading: string,
): Promise<WordAudio | null> {
  for (const candidate of await findWordAudioCandidates(settings, term, reading)) {
    try {
      return await loadWordAudio(candidate);
    } catch {
      /* try the next source */
    }
  }
  return null;
}

let current: { audio: HTMLAudioElement; url: string } | null = null;

export async function playWordAudioData(audio: WordAudio): Promise<void> {
  const bytes = Uint8Array.from(atob(audio.dataBase64), (c) => c.charCodeAt(0));
  const url = URL.createObjectURL(new Blob([bytes], { type: audio.mime }));
  if (current) {
    current.audio.pause();
    URL.revokeObjectURL(current.url);
  }
  current = { audio: new Audio(url), url };
  await current.audio.play();
}
