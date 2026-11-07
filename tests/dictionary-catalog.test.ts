// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import assert from "node:assert/strict";
// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import test from "node:test";
import {
  RECOMMENDED_DICTIONARIES,
  isInstalled,
  offerUrl,
  recommendedDictionaries,
  wtyOffers,
  wtySources,
  wtyTargets,
  wtyUrl,
  type WtyMetadata,
} from "../src/lib/mining/dictionary-catalog.ts";

const META: WtyMetadata = {
  dicts: {
    main: { sources: { ja: { targets: { en: "15.9 MB", pt: "362.3 KB" } } } },
    glossary: { sources: { en: { targets: { ja: "1 MB" } } } },
    ipa: { sources: { ja: { targets: { en: "1.1 MB" } } } },
    "ipa-merged": { sources: { all: { targets: { ja: "2 MB" } } } },
  },
};

test("wty URLs follow the release layout", () => {
  const base = "https://huggingface.co/datasets/daxida/wty-release/resolve/main/latest/dict";
  assert.equal(wtyUrl("main", "ja", "pt"), `${base}/ja/pt/wty-ja-pt.zip`);
  assert.equal(wtyUrl("glossary", "cs", "af"), `${base}/cs/af/wty-cs-af-gloss.zip`);
  assert.equal(wtyUrl("ipa", "ja", "en"), `${base}/ja/en/wty-ja-en-ipa.zip`);
  assert.equal(wtyUrl("ipa-merged", "ja", "pt"), `${base}/all/ja/wty-ja-ipa.zip`);
});

test("wty offers list what exists for the pair, merged IPA whatever the target", () => {
  assert.deepEqual(
    wtyOffers(META, "ja", "en").map((o) => [o.id, o.kind, o.size]),
    [
      ["wty-ja-en", "terms", "15.9 MB"],
      ["wty-ja-en-ipa", "pronunciation", "1.1 MB"],
      ["wty-ja-ipa", "pronunciation", "2 MB"],
    ],
  );
  assert.deepEqual(
    wtyOffers(META, "ja", "pt").map((o) => o.id),
    ["wty-ja-pt", "wty-ja-ipa"],
  );
  assert.deepEqual(wtySources(META), ["en", "ja"]);
  assert.deepEqual(wtyTargets(META, "ja"), ["en", "pt"]);
});

test("installed dictionaries are recognized by their imported titles", () => {
  const ja = RECOMMENDED_DICTIONARIES.ja;
  const byId = (id: string) => ja.find((o) => o.id === id)!;
  assert.ok(isInstalled(byId("jmdict-english"), ["JMdict [2026-11-07]"]));
  assert.ok(!isInstalled(byId("jmdict-english"), ["JMdict (Spanish) [2026-11-07]"]));
  assert.ok(isInstalled(byId("jmdict-spanish"), ["JMdict (Spanish) [2026-11-07]"]));
  assert.ok(isInstalled(byId("kanjidic-english"), ["KANJIDIC [2026-311]"]));
  assert.ok(isInstalled(byId("kanjidic-portuguese"), ["KANJIDIC (Portuguese) [2026-311]"]));
  assert.ok(isInstalled(byId("jpdb-frequency"), ["JPDBv2㋕"]));
  const wty = wtyOffers(META, "ja", "pt")[0];
  assert.ok(isInstalled(wty, ["wty-ja-pt"]));
  assert.ok(!isInstalled(wty, ["wty-ja-pt-ipa"]));
  assert.ok(isInstalled(RECOMMENDED_DICTIONARIES.ko[0], ["KRDICT EN"]));
  assert.ok(isInstalled(RECOMMENDED_DICTIONARIES.zh[0], ["CC-CEDICT [2026-11-06]"]));
  assert.ok(!isInstalled(RECOMMENDED_DICTIONARIES.zh[0], ["CC-CEDICT Hanzi [2026-11-06]"]));
});

test("recommendations explaining in the chosen language come first", () => {
  const ids = recommendedDictionaries("ja", "pt").map((o) => o.id);
  assert.ok(ids.indexOf("kanjidic-portuguese") < ids.indexOf("jitendex"));
  // Frequency lists have no explanation language and stay up with them.
  assert.ok(ids.indexOf("jpdb-frequency") < ids.indexOf("jitendex"));
  assert.deepEqual(recommendedDictionaries("xx", "en"), []);
});

test("a GitHub offer takes the matching asset of the newest release", () => {
  const jitendex = RECOMMENDED_DICTIONARIES.ja.find((o) => o.id === "jitendex")!;
  const release = {
    assets: [
      { name: "jitendex-mdict.zip", browser_download_url: "https://x/mdict.zip" },
      { name: "jitendex-yomitan.zip", browser_download_url: "https://x/yomitan.zip" },
    ],
  };
  assert.equal(offerUrl(jitendex, release), "https://x/yomitan.zip");
  assert.equal(offerUrl(jitendex, { assets: [] }), null);
  const jpdb = RECOMMENDED_DICTIONARIES.ja.find((o) => o.id === "jpdb-frequency")!;
  assert.match(offerUrl(jpdb) ?? "", /^https:\/\/github\.com\/Kuuuube\//);
});
