// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import assert from "node:assert/strict";
// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import test from "node:test";
import {
  lineFromSnapshot,
  playbackToSubTime,
  subToPlaybackTime,
} from "../src/lib/player/sub-timing.ts";
import { subCueSeekTarget } from "../src/lib/player/sub-seek.ts";
import { HOTKEYS } from "../src/lib/hotkeys.ts";

test("the line on screen is shifted by the subtitle delay", () => {
  const line = lineFromSnapshot({
    subText: " hola ",
    subStartSec: 5,
    subEndSec: 8,
    subDelaySec: 2,
  });
  assert.deepEqual(line, { text: "hola", start: 7, end: 10 });
});

test("no line without text or timing", () => {
  assert.equal(
    lineFromSnapshot({ subText: "", subStartSec: 5, subEndSec: 8, subDelaySec: 0 }),
    null,
  );
  assert.equal(lineFromSnapshot({ subText: "x", subStartSec: 5, subDelaySec: 0 }), null);
});

test("subtitle line seek goes to the next start, or to the line before", () => {
  const cues = [
    { start: 1, end: 2, text: "a" },
    { start: 4, end: 5, text: "b" },
    { start: 8, end: 9, text: "c" },
  ];
  assert.equal(subCueSeekTarget(cues, 4.2, 1), 8);
  assert.equal(subCueSeekTarget(cues, 4.9, -1), 1, "inside a line: the line before");
  assert.equal(subCueSeekTarget(cues, 3.98, -1), 1, "landed just before a line: the line before");
  assert.equal(subCueSeekTarget(cues, 6, -1), 4, "between lines: the one that just played");
  assert.equal(subCueSeekTarget(cues, 1.5, -1), null);
  assert.equal(subCueSeekTarget(cues, 9, 1), null);
});

test("replay targets the line's start in playback time", () => {
  const line = lineFromSnapshot({
    subText: "otra vez",
    subStartSec: 12,
    subEndSec: 14,
    subDelaySec: -0.5,
  });
  assert.equal(line?.start, 11.5);
});

test("hidden subtitles are a player-wide flag that listeners follow", async () => {
  const { isSubsHidden, setSubsHidden } = await import("../src/lib/player/subs-hidden.ts");
  assert.equal(isSubsHidden(), false);
  setSubsHidden(true);
  assert.equal(isSubsHidden(), true);
  setSubsHidden(false);
  assert.equal(isSubsHidden(), false);
});

test("a line retimed by sub-fps is cut where it shows, not at its file times", () => {
  const at48 = { subText: "A", subStartSec: 10, subEndSec: 12, subtitleFps: 48, videoFps: 24 };
  assert.deepEqual(lineFromSnapshot({ ...at48, subDelaySec: 0 }), {
    text: "A",
    start: 20,
    end: 24,
  });
  assert.deepEqual(lineFromSnapshot({ ...at48, subDelaySec: 3 }), {
    text: "A",
    start: 23,
    end: 27,
  });
  const at12 = { subDelaySec: 0, subtitleFps: 12, videoFps: 24 };
  assert.equal(subToPlaybackTime(10, at12), 5);
  // sub-fps 0 (or unknown) is no correction.
  assert.equal(subToPlaybackTime(10, { subDelaySec: 2, subtitleFps: 0, videoFps: 24 }), 12);
  assert.equal(subToPlaybackTime(10, { subDelaySec: 2 }), 12);
});

test("playback times map back to the subtitle's own times", () => {
  const timing = { subDelaySec: 3, subtitleFps: 25, videoFps: 24 };
  for (const t of [0, 10, 1234.5]) {
    assert.ok(Math.abs(playbackToSubTime(subToPlaybackTime(t, timing), timing) - t) < 1e-9);
  }
});

test("the subtitle line hotkeys have no key until the user picks one", () => {
  for (const id of ["playerSubtitleToggle", "playerSubNext", "playerSubPrev", "playerSubReplay"]) {
    assert.equal(HOTKEYS.find((def) => def.id === id)?.defaultBinding, "", id);
  }
});
