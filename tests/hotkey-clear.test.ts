// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import assert from "node:assert/strict";
// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import test from "node:test";
import { effectiveBinding, findHotkeyMatch } from "../src/lib/hotkeys.ts";

function keyboardEvent(key: string, init: Partial<KeyboardEvent> = {}): KeyboardEvent {
  return {
    key,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ...init,
  } as KeyboardEvent;
}

test("a cleared shortcut has no key", () => {
  assert.equal(effectiveBinding("playerStats", { playerStats: "" }), "");
  assert.equal(effectiveBinding("playerStats", {}), "i");
  assert.equal(findHotkeyMatch(keyboardEvent("i"), { playerStats: "" }, "Player"), null);
});

test("a cleared shortcut stays cleared on other keyboard layouts", () => {
  const turkishI = keyboardEvent("ı", { code: "KeyI" });
  assert.equal(findHotkeyMatch(turkishI, {}, "Player"), "playerStats");
  assert.equal(findHotkeyMatch(turkishI, { playerStats: "" }, "Player"), null);
  const russianS = keyboardEvent("ы", { code: "KeyS", ctrlKey: true });
  assert.equal(findHotkeyMatch(russianS, { globalSettingsOpen: "" }, "Global"), null);
});
