// Yomitan dictionaries Harbor offers to download, kept free of Tauri and React
// so it can be tested. The recommended ones follow yomitan.wiki's list; the
// Wiktionary ones (wty, yomidevs/wiktionary-to-yomitan) are read from the
// release metadata that project publishes, the same data its download page uses.

export type DictionaryKind =
  | "terms"
  | "names"
  | "kanji"
  | "frequency"
  | "pronunciation"
  | "glossary";

export type DictionarySource =
  // The newest release of a GitHub repository, its asset matched by name.
  { github: string; asset: RegExp } | { url: string };

export type DictionaryOffer = {
  id: string;
  name: string;
  kind: DictionaryKind;
  // ISO 639-1 of the definitions; the studied language itself when monolingual.
  explains?: string;
  size?: string;
  // Untranslated English, passed through t().
  note?: string;
  // How the dictionary names itself once imported (its index.json title,
  // which usually ends with a date).
  title: RegExp;
  source: DictionarySource;
};

const jmdict = (language: string, iso: string, size: string): DictionaryOffer => ({
  id: `jmdict-${language.toLowerCase()}`,
  name: `JMdict (${language})`,
  kind: "terms",
  explains: iso,
  size,
  title: new RegExp(`^JMdict \\(${language}\\) \\[`),
  source: {
    github: "yomidevs/jmdict-yomitan",
    asset: new RegExp(`^JMdict_${language.toLowerCase()}\\.zip$`),
  },
});

const kanjidic = (language: string, iso: string, size: string): DictionaryOffer => ({
  id: `kanjidic-${language.toLowerCase()}`,
  name: `KANJIDIC (${language})`,
  kind: "kanji",
  explains: iso,
  size,
  title: new RegExp(`^KANJIDIC \\(${language}\\) \\[`),
  source: {
    github: "yomidevs/jmdict-yomitan",
    asset: new RegExp(`^KANJIDIC_${language.toLowerCase()}\\.zip$`),
  },
});

const krdict = (code: string, iso: string): DictionaryOffer => ({
  id: `krdict-${iso}`,
  name: `KRDICT (${code})`,
  kind: "terms",
  explains: iso,
  size: "4.5 MB",
  title: new RegExp(`^KRDICT ${code}$`),
  source: {
    github: "Lyroxide/yomitan-ko-dic",
    asset: new RegExp(`^KO-${code}\\.KRDICT\\.No\\.Examples\\.zip$`),
  },
});

const KUUUUBE = "https://github.com/Kuuuube/yomitan-dictionaries/raw/main/dictionaries";

/** Recommended dictionaries by studied language (ISO 639-1), from yomitan.wiki. */
export const RECOMMENDED_DICTIONARIES: Record<string, DictionaryOffer[]> = {
  ja: [
    {
      id: "jitendex",
      name: "Jitendex",
      kind: "terms",
      explains: "en",
      size: "39 MB",
      note: "An improved JMdict, actively maintained. The one to pick for English.",
      title: /^Jitendex/i,
      source: { github: "stephenmk/stephenmk.github.io", asset: /^jitendex-yomitan\.zip$/ },
    },
    {
      id: "jmdict-english",
      name: "JMdict (English)",
      kind: "terms",
      explains: "en",
      size: "15.6 MB",
      title: /^JMdict \[/,
      source: { github: "yomidevs/jmdict-yomitan", asset: /^JMdict_english\.zip$/ },
    },
    jmdict("Spanish", "es", "1.3 MB"),
    jmdict("French", "fr", "0.6 MB"),
    jmdict("German", "de", "6.4 MB"),
    jmdict("Dutch", "nl", "3.1 MB"),
    jmdict("Russian", "ru", "3.5 MB"),
    jmdict("Hungarian", "hu", "1.8 MB"),
    jmdict("Swedish", "sv", "0.4 MB"),
    jmdict("Slovenian", "sl", "0.3 MB"),
    {
      id: "jmnedict",
      name: "JMnedict",
      kind: "names",
      explains: "en",
      size: "11.4 MB",
      note: "Readings of names of people, places and organizations.",
      title: /^JMnedict \[/,
      source: { github: "yomidevs/jmdict-yomitan", asset: /^JMnedict\.zip$/ },
    },
    {
      id: "kanjidic-english",
      name: "KANJIDIC (English)",
      kind: "kanji",
      explains: "en",
      size: "0.7 MB",
      title: /^KANJIDIC \[/,
      source: { github: "yomidevs/jmdict-yomitan", asset: /^KANJIDIC_english\.zip$/ },
    },
    kanjidic("Portuguese", "pt", "0.3 MB"),
    kanjidic("Spanish", "es", "0.3 MB"),
    kanjidic("French", "fr", "0.3 MB"),
    {
      id: "jpdb-frequency",
      name: "JPDB frequency",
      kind: "frequency",
      size: "6 MB",
      note: "How common each word is, from the jpdb.io corpus.",
      title: /^JPDBv2/,
      source: { url: `${KUUUUBE}/JPDB_v2.2_Frequency_Kana_2024-10-13.zip` },
    },
    {
      id: "bccwj-frequency",
      name: "BCCWJ frequency",
      kind: "frequency",
      size: "18.7 MB",
      note: "How common each word is in written Japanese.",
      title: /BCCWJ/i,
      source: { url: `${KUUUUBE}/BCCWJ_SUW_LUW_combined.zip` },
    },
  ],
  ko: [
    krdict("EN", "en"),
    krdict("ES", "es"),
    krdict("FR", "fr"),
    krdict("JA", "ja"),
    krdict("RU", "ru"),
    krdict("ZH", "zh"),
    krdict("VI", "vi"),
    krdict("ID", "id"),
    krdict("TH", "th"),
    krdict("AR", "ar"),
    krdict("MN", "mn"),
    {
      id: "stdict",
      name: "STDICT",
      kind: "terms",
      explains: "ko",
      size: "48 MB",
      note: "The National Institute of Korean Language's dictionary, in Korean.",
      title: /STDICT/i,
      source: {
        github: "Lyroxide/yomitan-ko-dic",
        asset: /^Monolingual\.STDICT\.No\.Examples\.zip$/,
      },
    },
    {
      id: "cc100-korean",
      name: "CC100 frequency",
      kind: "frequency",
      size: "1.9 MB",
      title: /^CC100-Korean$/,
      source: { github: "Lyroxide/yomitan-ko-dic", asset: /^Frequency\.CC100\.Korean\.zip$/ },
    },
  ],
  zh: [
    {
      id: "cc-cedict",
      name: "CC-CEDICT",
      kind: "terms",
      explains: "en",
      size: "7.7 MB",
      title: /^CC-CEDICT \[/,
      source: { github: "MarvNC/cc-cedict-yomitan", asset: /^CC-CEDICT\.zip$/ },
    },
    {
      id: "cc-cedict-hanzi",
      name: "CC-CEDICT Hanzi",
      kind: "kanji",
      explains: "en",
      size: "4.4 MB",
      title: /^CC-CEDICT Hanzi \[/,
      source: { github: "MarvNC/cc-cedict-yomitan", asset: /^CC-CEDICT\.Hanzi\.zip$/ },
    },
  ],
};

/** The recommended dictionaries for a studied language, the ones explaining in
 *  `explains` (or in the studied language itself) first. */
export function recommendedDictionaries(studied: string, explains: string): DictionaryOffer[] {
  const list = RECOMMENDED_DICTIONARIES[studied] ?? [];
  const rank = (o: DictionaryOffer) =>
    !o.explains || o.explains === explains || o.explains === studied ? 0 : 1;
  return list
    .map((offer, i) => ({ offer, i }))
    .sort((a, b) => rank(a.offer) - rank(b.offer) || a.i - b.i)
    .map(({ offer }) => offer);
}

// ---------- Wiktionary (wty) ----------

export const WTY_METADATA_URL =
  "https://yomidevs.github.io/wiktionary-to-yomitan/release_metadata_yomitan.json";
const WTY_DICT_URL = "https://huggingface.co/datasets/daxida/wty-release/resolve/main/latest/dict";

export type WtyType = "main" | "glossary" | "ipa" | "ipa-merged";

type WtyTypeMeta = { sources?: Record<string, { targets?: Record<string, string> }> };
export type WtyMetadata = { dicts?: Partial<Record<WtyType, WtyTypeMeta>> };

const PAIR_TYPES: WtyType[] = ["main", "glossary", "ipa"];

function wtyStem(type: WtyType, source: string, target: string): string {
  switch (type) {
    case "main":
      return `wty-${source}-${target}`;
    case "glossary":
      return `wty-${source}-${target}-gloss`;
    case "ipa":
      return `wty-${source}-${target}-ipa`;
    case "ipa-merged":
      return `wty-${source}-ipa`;
  }
}

/** Download URL of a wty dictionary. "ipa-merged" has no target: it gathers
 *  the pronunciations of every Wiktionary edition. */
export function wtyUrl(type: WtyType, source: string, target: string): string {
  const folder = type === "ipa-merged" ? `all/${source}` : `${source}/${target}`;
  return `${WTY_DICT_URL}/${folder}/${wtyStem(type, source, target)}.zip`;
}

/** Languages there is a wty dictionary for, as ISO codes. */
export function wtySources(meta: WtyMetadata): string[] {
  const out = new Set<string>();
  for (const type of PAIR_TYPES)
    for (const source of Object.keys(meta.dicts?.[type]?.sources ?? {})) out.add(source);
  return [...out].sort();
}

/** Languages a studied language is explained in, in any wty dictionary. */
export function wtyTargets(meta: WtyMetadata, source: string): string[] {
  const out = new Set<string>();
  for (const type of PAIR_TYPES)
    for (const target of Object.keys(meta.dicts?.[type]?.sources?.[source]?.targets ?? {}))
      out.add(target);
  return [...out].sort();
}

const WTY_KINDS: Record<WtyType, { kind: DictionaryKind; label: string }> = {
  main: { kind: "terms", label: "Wiktionary" },
  glossary: { kind: "glossary", label: "Wiktionary glossary" },
  ipa: { kind: "pronunciation", label: "Wiktionary IPA" },
  "ipa-merged": { kind: "pronunciation", label: "Wiktionary IPA (all editions)" },
};

/** Every wty dictionary for a pair, in the order the wty page lists them. */
export function wtyOffers(meta: WtyMetadata, source: string, target: string): DictionaryOffer[] {
  const offers: DictionaryOffer[] = [];
  for (const type of ["main", "glossary", "ipa", "ipa-merged"] as WtyType[]) {
    const size =
      type === "ipa-merged"
        ? meta.dicts?.[type]?.sources?.all?.targets?.[source]
        : meta.dicts?.[type]?.sources?.[source]?.targets?.[target];
    if (!size) continue;
    const stem = wtyStem(type, source, target);
    offers.push({
      id: stem,
      name: `${WTY_KINDS[type].label} (${stem})`,
      kind: WTY_KINDS[type].kind,
      explains: type === "ipa-merged" ? undefined : target,
      size,
      title: new RegExp(`^${stem}$`),
      source: { url: wtyUrl(type, source, target) },
    });
  }
  return offers;
}

/** Whether one of the imported dictionaries is this offer. */
export function isInstalled(offer: DictionaryOffer, installedTitles: string[]): boolean {
  return installedTitles.some((title) => offer.title.test(title.trim()));
}

export type GithubRelease = { assets?: { name?: string; browser_download_url?: string }[] };

/** The download URL of an offer, given its GitHub release when it has one. */
export function offerUrl(offer: DictionaryOffer, release?: GithubRelease): string | null {
  if ("url" in offer.source) return offer.source.url;
  const { asset } = offer.source;
  const found = release?.assets?.find((a) => a.name && asset.test(a.name));
  return found?.browser_download_url ?? null;
}

export function githubLatestReleaseUrl(repo: string): string {
  return `https://api.github.com/repos/${repo}/releases/latest`;
}
