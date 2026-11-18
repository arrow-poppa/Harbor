// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import assert from "node:assert/strict";
// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import test from "node:test";
import {
  bindPad,
  bindingToKeyInit,
  isDefaultPadBinding,
  modifierInUse,
  padAction,
  padChordsFor,
  padCustomized,
  resetPadFor,
  unbindPad,
} from "../src/lib/gamepad/bindings.ts";

test("untouched controllers keep doing what the player always did", () => {
  assert.equal(padAction({}, "south"), "playerPlayPause");
  assert.equal(padAction({}, "lt"), "playerSeekBack10");
  assert.ok(isDefaultPadBinding({}, "south"));
  assert.deepEqual(padChordsFor({}, "playerSeekBack10"), ["lt", "dleft"]);
  assert.equal(modifierInUse({}, "lt"), false, "no combination means LT acts on press");
});

test("binding a chord moves it to the new action", () => {
  const pad = bindPad({}, "south", "playerScreenshot");
  assert.equal(padAction(pad, "south"), "playerScreenshot");
  assert.deepEqual(padChordsFor(pad, "playerPlayPause"), []);
  assert.equal(isDefaultPadBinding(pad, "south"), false);
  assert.ok(padCustomized(pad, "playerPlayPause"));
  assert.ok(padCustomized(pad, "playerScreenshot"));
});

test("combinations make the shoulder wait, and resetting gives the defaults back", () => {
  let pad = bindPad({}, "lt+south", "playerScreenshot");
  assert.equal(padAction(pad, "lt+south"), "playerScreenshot");
  assert.ok(modifierInUse(pad, "lt"));
  assert.equal(padAction(pad, "lt"), "playerSeekBack10", "LT alone keeps its job");
  pad = unbindPad(pad, "dleft");
  assert.equal(padAction(pad, "dleft"), null);
  pad = resetPadFor(pad, "playerSeekBack10");
  assert.equal(padAction(pad, "dleft"), "playerSeekBack10");
  assert.deepEqual(resetPadFor(pad, "playerScreenshot"), {});
});

test("binding a chord back to its default action stores nothing", () => {
  const moved = bindPad({}, "south", "playerScreenshot");
  assert.deepEqual(bindPad(moved, "south", "playerPlayPause"), {});
});

test("a keyboard binding replays as the key that produced it", () => {
  assert.deepEqual(
    { ...bindingToKeyInit("ctrl+alt+r"), bubbles: undefined, cancelable: undefined },
    {
      key: "r",
      code: "KeyR",
      ctrlKey: true,
      shiftKey: false,
      altKey: true,
      metaKey: false,
      bubbles: undefined,
      cancelable: undefined,
    },
  );
  assert.equal(bindingToKeyInit("Space")?.key, " ");
  assert.equal(bindingToKeyInit("ctrl++")?.key, "+");
  assert.equal(bindingToKeyInit(""), null);
});
