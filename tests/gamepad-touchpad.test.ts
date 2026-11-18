// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import assert from "node:assert/strict";
// @ts-expect-error Node test types are intentionally outside the browser-only tsconfig.
import test from "node:test";
import { pushTouch, takeTouchDelta } from "../src/lib/gamepad/touchpad.ts";
import { isPlayStationPad } from "../src/lib/gamepad/web-source.ts";

test("the touchpad moves the cursor by the finger's movement, not its position", () => {
  pushTouch(0.5, 0.5, true);
  assert.deepEqual(takeTouchDelta(), { x: 0, y: 0 });
  pushTouch(0.6, 0.4, true);
  pushTouch(0.7, 0.4, true);
  const moved = takeTouchDelta();
  assert.ok(Math.abs(moved.x - 0.2) < 1e-9 && Math.abs(moved.y + 0.1) < 1e-9);
  // Lifting the finger and putting it down elsewhere does not jump the cursor.
  pushTouch(0.7, 0.4, false);
  pushTouch(0.1, 0.9, true);
  assert.deepEqual(takeTouchDelta(), { x: 0, y: 0 });
});

test("PlayStation pads are recognized by the WebView's id for them", () => {
  assert.equal(
    isPlayStationPad("DualSense Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)"),
    true,
  );
  assert.equal(
    isPlayStationPad("Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)"),
    true,
  );
  // A PS3 pad has no touchpad.
  assert.equal(
    isPlayStationPad("PLAYSTATION(R)3 Controller (STANDARD GAMEPAD Vendor: 054c Product: 0268)"),
    false,
  );
  assert.equal(isPlayStationPad("Xbox 360 Controller (XInput STANDARD GAMEPAD)"), false);
});
