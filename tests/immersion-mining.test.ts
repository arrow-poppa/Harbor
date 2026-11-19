// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import assert from "node:assert/strict";
// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import test from "node:test";
import {
  invisibleMarker,
  newestRecentNote,
  pushLine,
} from "../src/lib/mining/immersion-core.ts";

test("a recording keeps each line once, in order", () => {
  const lines: string[] = [];
  for (const t of ["a", "a", "", "b", "b ", "a"]) pushLine(lines, t);
  assert.deepEqual(lines, ["a", "b", "a"]);
});

test("update last card only touches a recent note", () => {
  const now = 1_000_000_000;
  assert.equal(newestRecentNote([now - 120_000, now - 30_000], now, 10), now - 30_000);
  assert.equal(newestRecentNote([now - 11 * 60_000], now, 10), null);
  assert.equal(newestRecentNote([], now, 10), null);
});

test("the first-field marker is invisible and differs per note", () => {
  const a = invisibleMarker({ Sentence: "a", Audio: "[sound:1.mp3]" });
  const b = invisibleMarker({ Sentence: "b", Audio: "[sound:1.mp3]" });
  assert.equal(a.length, 64);
  assert.match(a, /^[​‌]+$/);
  assert.notEqual(a, b);
  assert.equal(
    a,
    invisibleMarker({ Audio: "[sound:1.mp3]", Sentence: "a" }),
    "field order does not matter",
  );
});

test("a selected word is found again inside a recording's text", async () => {
  const { locateWord } = await import("../src/lib/player/word-selection.ts");
  const sel = { sentence: "No quiero ir", matchStart: 3, matchLength: 6 };
  assert.deepEqual(locateWord(sel, "Hola.\nNo quiero ir"), { matchStart: 9, matchLength: 6 });
  assert.deepEqual(locateWord(sel, "Otra cosa"), { matchStart: 0, matchLength: 0 });
});

test("popup size stays between 75% and 250% and steps by 10", async () => {
  const { sanitizePopupSize, stepPopupSize } =
    await import("../src/lib/player/lookup-popup-size.ts");
  assert.equal(sanitizePopupSize(undefined, 100), 100);
  assert.equal(sanitizePopupSize(400, 100), 250);
  assert.equal(sanitizePopupSize(50, 100), 75);
  assert.equal(stepPopupSize(100, 1), 110);
  assert.equal(stepPopupSize(80, -1), 75);
  assert.equal(stepPopupSize(245, 1), 250);
});

test("an open dictionary popup is tracked per subtitle until each one closes", async () => {
  const { isLookupPopupOpen, setLookupPopupOpen } = await import("../src/lib/player/lookup-nav.ts");
  const primary = {};
  const secondary = {};
  assert.equal(isLookupPopupOpen(), false);
  setLookupPopupOpen(primary, true);
  setLookupPopupOpen(secondary, true);
  setLookupPopupOpen(primary, false);
  assert.equal(isLookupPopupOpen(), true);
  setLookupPopupOpen(secondary, false);
  assert.equal(isLookupPopupOpen(), false);
});

// Measured on mpv 0.41 with a 10–12s line in a 24 fps video: sub-start and
// sub-end stay 10 and 12 whatever sub-fps and sub-delay are.
