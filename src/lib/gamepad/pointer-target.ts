// Whether the controller pointer is on screen. While it is, A is its click
// and the left stick scrolls under it, so neither also does its player job.

export const POINTER_SHOWN_ATTR = "data-gamepad-pointer";
/** Sent when the left stick takes over in the player: the pointer steps aside. */
export const POINTER_YIELD_EVENT = "harbor:gamepad-pointer-yield";

export function pointerShown(): boolean {
  return document.documentElement.hasAttribute(POINTER_SHOWN_ATTR);
}
