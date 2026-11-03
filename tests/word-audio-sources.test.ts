// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import assert from "node:assert/strict";
// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import test from "node:test";
import {
  DEFAULT_WORD_AUDIO_SOURCES,
  audioExtFor,
  fillCustomUrl,
  isLinguaLibreFile,
  isWiktionaryFile,
  jpod101Url,
  languagePod101Url,
  lookupLanguageForTrack,
  moveWordAudioSource,
  parseCustomAudioList,
  pickEdgeVoice,
  sanitizeWordAudioSources,
  wordAudioRequestHeaders,
  wiktionaryRegion,
} from "../src/lib/mining/word-audio-core.ts";

test("only the local database is on by default", () => {
  const on = DEFAULT_WORD_AUDIO_SOURCES.filter((s) => s.enabled).map((s) => s.type);
  assert.deepEqual(on, ["local"]);
});

test("saved sources keep their order, gain new types and drop unknown ones", () => {
  const saved = sanitizeWordAudioSources([
    { type: "edge-tts", enabled: true, voice: "ja-JP-NanamiNeural", speak: "term" },
    { type: "bogus", enabled: true },
    { type: "local", enabled: false },
    { type: "edge-tts", enabled: false },
    { type: "custom", enabled: true, url: "  https://x.test/{term}  " },
  ]);
  assert.deepEqual(
    saved.slice(0, 3).map((s) => s.type),
    ["edge-tts", "local", "custom"],
  );
  assert.equal(saved.length, DEFAULT_WORD_AUDIO_SOURCES.length);
  assert.deepEqual(saved[0], {
    type: "edge-tts",
    enabled: true,
    voice: "ja-JP-NanamiNeural",
    speak: "term",
    onlyAsFallback: true,
  });
  assert.equal(saved[2].url, "https://x.test/{term}");
  assert.equal(saved.find((s) => s.type === "jisho")?.enabled, false);
  assert.deepEqual(sanitizeWordAudioSources("junk"), DEFAULT_WORD_AUDIO_SOURCES);
});

test("moving a source swaps it with its neighbour and stops at the ends", () => {
  const list = DEFAULT_WORD_AUDIO_SOURCES;
  assert.deepEqual(
    moveWordAudioSource(list, 1, -1)
      .slice(0, 2)
      .map((s) => s.type),
    ["jpod101", "local"],
  );
  assert.equal(moveWordAudioSource(list, 0, -1), list);
  assert.equal(moveWordAudioSource(list, list.length - 1, 1), list);
});

test("JapanesePod101 sends kana-only words as kana", () => {
  assert.match(jpod101Url("食べる", "たべる"), /kanji=%E9%A3%9F.*&kana=%E3%81%9F/);
  const kanaOnly = jpod101Url("ありがとう", "ありがとう");
  assert.doesNotMatch(kanaOnly, /kanji=/);
  assert.match(kanaOnly, /kana=/);
});

test("LanguagePod101 picks the pod or class site per language", () => {
  assert.equal(
    languagePod101Url("japanese"),
    "https://www.japanesepod101.com/learningcenter/reference/dictionary_post",
  );
  assert.equal(
    languagePod101Url("korean"),
    "https://www.koreanclass101.com/learningcenter/reference/dictionary_post",
  );
  assert.equal(languagePod101Url("latin"), null);
});

test("custom URLs fill known placeholders and keep the rest", () => {
  assert.equal(
    fillCustomUrl(
      "http://h/?t={term}&r={reading}&l={language}&x={other}",
      "猫",
      "ねこ",
      "japanese",
    ),
    "http://h/?t=猫&r=ねこ&l=ja&x={other}",
  );
});

test("Wikimedia Commons file names are matched to the word and language", () => {
  assert.ok(isLinguaLibreFile("File:LL-Q1860 (eng)-Someone-house.wav", "house", "english"));
  assert.ok(!isLinguaLibreFile("File:LL-Q1860 (eng)-Someone-houses.wav", "house", "english"));
  assert.ok(!isLinguaLibreFile("File:LL-Q1860 (fra)-Someone-house.wav", "house", "english"));
  assert.ok(isWiktionaryFile("File:En-us-house.ogg", "house", "english"));
  assert.ok(isWiktionaryFile("File:En-house2.ogg", "house", "english"));
  assert.ok(!isWiktionaryFile("File:De-house.ogg", "house", "english"));
  assert.equal(wiktionaryRegion("File:En-us-house.ogg", "english"), "US");
  assert.equal(wiktionaryRegion("File:En-house.ogg", "english"), null);
  // Regex characters in a word are literal.
  assert.ok(!isWiktionaryFile("File:En-aXb.ogg", "a.b", "english"));
});

test("a custom JSON list keeps only http(s) entries", () => {
  assert.deepEqual(
    parseCustomAudioList({
      type: "audioSourceList",
      audioSources: [
        { url: "http://localhost:5050/a.mp3", name: "Forvo" },
        { url: "file:///etc/passwd" },
        { url: "https://x.test/b.ogg" },
        { name: "no url" },
      ],
    }),
    [{ url: "http://localhost:5050/a.mp3", name: "Forvo" }, { url: "https://x.test/b.ogg" }],
  );
  assert.deepEqual(parseCustomAudioList(null), []);
});

test("the Edge voice is the chosen one, else the lookup language's first", () => {
  const voices = [
    { id: "en-US-AriaNeural", locale: "en-US" },
    { id: "ja-JP-NanamiNeural", locale: "ja-JP" },
    { id: "ja-JP-KeitaNeural", locale: "ja-JP" },
  ];
  assert.equal(pickEdgeVoice(voices, "ja-JP-KeitaNeural", "japanese")?.id, "ja-JP-KeitaNeural");
  assert.equal(pickEdgeVoice(voices, "", "japanese")?.id, "ja-JP-NanamiNeural");
  assert.equal(pickEdgeVoice(voices, "gone", "english")?.id, "en-US-AriaNeural");
  assert.equal(pickEdgeVoice(voices, "", "arabic"), null);
});

test("audio extensions come from the type, then the URL", () => {
  assert.equal(audioExtFor("audio/mpeg", "https://x/a"), "mp3");
  assert.equal(audioExtFor("application/ogg", "https://x/a"), "ogg");
  assert.equal(audioExtFor(null, "https://x/a.wav?x=1"), "wav");
  assert.equal(audioExtFor("application/octet-stream", "https://x/a"), "mp3");
});

test("Wikimedia requests name Harbor; other sites keep the default User-Agent", () => {
  const ua = { "User-Agent": "Harbor/1.0.2 (https://github.com/Harborofficial/Harbor)" };
  assert.deepEqual(
    wordAudioRequestHeaders("https://upload.wikimedia.org/wikipedia/commons/b/bd/x.ogg", "1.0.2"),
    ua,
  );
  assert.deepEqual(wordAudioRequestHeaders("https://commons.wikimedia.org/w/api.php", "1.0.2"), ua);
  assert.equal(wordAudioRequestHeaders("https://jisho.org/search/x", "1.0.2"), undefined);
  assert.equal(wordAudioRequestHeaders("https://notwikimedia.org/x", "1.0.2"), undefined);
  assert.equal(wordAudioRequestHeaders("not a url", "1.0.2"), undefined);
});

test("a subtitle track's language tag picks the lookup language", () => {
  assert.equal(lookupLanguageForTrack("jpn"), "japanese");
  assert.equal(lookupLanguageForTrack("ja-JP"), "japanese");
  assert.equal(lookupLanguageForTrack("pt-BR"), "portuguese");
  assert.equal(lookupLanguageForTrack("es-419"), "spanish");
  assert.equal(lookupLanguageForTrack("chi"), "chinese");
  assert.equal(lookupLanguageForTrack("nob"), "norwegian");
  assert.equal(lookupLanguageForTrack("English"), "english");
  assert.equal(lookupLanguageForTrack("und"), null);
  assert.equal(lookupLanguageForTrack(""), null);
  assert.equal(lookupLanguageForTrack(undefined), null);
});
