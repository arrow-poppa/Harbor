import type { HotkeyId } from "@/lib/hotkeys";
import type { Layout } from "./layout";
import type { GpButton } from "./protocol";

// Controller buttons as hotkeys. A chord is one button ("south") or a held
// shoulder/trigger plus a button ("lt+south"), the way Ctrl+key works on a
// keyboard. Bindings are stored per chord, since a pad has few buttons and
// one action often has two (LT and D-pad left both seek back).

export const PAD_BUTTONS: readonly GpButton[] = [
  "south",
  "east",
  "west",
  "north",
  "lb",
  "rb",
  "lt",
  "rt",
  "dup",
  "ddown",
  "dleft",
  "dright",
  "start",
  "back",
  "guide",
  "lstick",
  "rstick",
];

export const PAD_MODIFIERS: readonly GpButton[] = ["lb", "rb", "lt", "rt"];

/** Override map stored in settings: storage key → action, "" = unbound. */
export type PadOverrides = Record<string, string>;

// What the player does with each button today. Kept as defaults so nothing
// changes until the user rebinds something.
export const DEFAULT_PAD_BINDINGS: Readonly<Record<string, HotkeyId>> = {
  south: "playerPlayPause",
  east: "playerClose",
  west: "playerSubtitleCycle",
  north: "playerStats",
  lb: "playerPrevEpisode",
  rb: "playerNextEpisode",
  lt: "playerSeekBack10",
  rt: "playerSeekForward10",
  dleft: "playerSeekBack10",
  dright: "playerSeekForward10",
  dup: "playerVolumeUp",
  ddown: "playerVolumeDown",
};

/** Every bound chord with its action, defaults merged with overrides. */
export function effectivePadBindings(overrides: PadOverrides | undefined): Map<string, HotkeyId> {
  const out = new Map<string, HotkeyId>();
  for (const [k, id] of Object.entries(DEFAULT_PAD_BINDINGS)) out.set(k, id);
  for (const [k, id] of Object.entries(overrides ?? {})) {
    if (id) out.set(k, id as HotkeyId);
    else out.delete(k);
  }
  return out;
}

/** The action a chord triggers, or null. */
export function padAction(overrides: PadOverrides | undefined, chord: string): HotkeyId | null {
  return effectivePadBindings(overrides).get(chord) ?? null;
}

/** True when the chord still does what the player always did with it. */
export function isDefaultPadBinding(overrides: PadOverrides | undefined, chord: string): boolean {
  return !(chord in (overrides ?? {})) && chord in DEFAULT_PAD_BINDINGS;
}

/** Chords bound to an action, in a stable order. */
export function padChordsFor(overrides: PadOverrides | undefined, id: HotkeyId): string[] {
  const out: string[] = [];
  for (const [chord, action] of effectivePadBindings(overrides)) {
    if (action === id) out.push(chord);
  }
  return out.sort((a, b) => chordOrder(a) - chordOrder(b));
}

function chordOrder(chord: string): number {
  const [first, second] = chord.split("+");
  const base = PAD_BUTTONS.indexOf(second ? (second as GpButton) : (first as GpButton));
  return (second ? 100 + PAD_MODIFIERS.indexOf(first as GpButton) * 20 : 0) + base;
}

/** Whether some binding starts with `modifier+`, meaning the button has to
 *  wait for its release before acting on its own. */
export function modifierInUse(overrides: PadOverrides | undefined, modifier: GpButton): boolean {
  const prefix = `${modifier}+`;
  for (const key of effectivePadBindings(overrides).keys()) if (key.startsWith(prefix)) return true;
  return false;
}

/** Binds a chord to an action, replacing whatever it did before. */
export function bindPad(
  overrides: PadOverrides | undefined,
  chord: string,
  id: HotkeyId,
): PadOverrides {
  const next = { ...overrides };
  if (DEFAULT_PAD_BINDINGS[chord] === id) delete next[chord];
  else next[chord] = id;
  return next;
}

/** Removes a chord from whatever it was bound to. */
export function unbindPad(overrides: PadOverrides | undefined, chord: string): PadOverrides {
  const next = { ...overrides };
  if (chord in DEFAULT_PAD_BINDINGS) next[chord] = "";
  else delete next[chord];
  return next;
}

/** Puts an action back to its default chords: frees chords taken from it and
 *  drops the ones added to it. */
export function resetPadFor(overrides: PadOverrides | undefined, id: HotkeyId): PadOverrides {
  const next = { ...overrides };
  for (const [key, action] of Object.entries(next)) {
    if (action === id || DEFAULT_PAD_BINDINGS[key] === id) delete next[key];
  }
  return next;
}

/** Whether the user changed this action's controller buttons. */
export function padCustomized(overrides: PadOverrides | undefined, id: HotkeyId): boolean {
  return Object.entries(overrides ?? {}).some(
    ([key, action]) => action === id || DEFAULT_PAD_BINDINGS[key] === id,
  );
}

const NAMES: Record<Layout, Record<GpButton, string>> = {
  xbox: {
    south: "A",
    east: "B",
    west: "X",
    north: "Y",
    lb: "LB",
    rb: "RB",
    lt: "LT",
    rt: "RT",
    dup: "D-pad ↑",
    ddown: "D-pad ↓",
    dleft: "D-pad ←",
    dright: "D-pad →",
    start: "Menu",
    back: "View",
    guide: "Guide",
    lstick: "L3",
    rstick: "R3",
  },
  ps: {
    south: "✕",
    east: "○",
    west: "□",
    north: "△",
    lb: "L1",
    rb: "R1",
    lt: "L2",
    rt: "R2",
    dup: "D-pad ↑",
    ddown: "D-pad ↓",
    dleft: "D-pad ←",
    dright: "D-pad →",
    start: "Options",
    back: "Create",
    guide: "PS",
    lstick: "L3",
    rstick: "R3",
  },
};

export function formatPadChord(chord: string, layout: Layout = "xbox"): string {
  return chord
    .split("+")
    .map((b) => NAMES[layout][b as GpButton] ?? b)
    .join(" + ");
}

/** A KeyboardEvent init that `eventToBinding` turns back into `binding`, so a
 *  controller button can trigger a keyboard hotkey through its own handler. */
export function bindingToKeyInit(binding: string): KeyboardEventInit | null {
  if (!binding) return null;
  const parts = binding.split("+");
  // "shift++" style bindings end in an empty part for the "+" key itself.
  let key = parts.pop() ?? "";
  if (key === "" && binding.endsWith("+")) key = "+";
  const mods = new Set(parts);
  if (key === "Space") key = " ";
  return {
    key,
    code: key.length === 1 && /[a-z]/i.test(key) ? `Key${key.toUpperCase()}` : key,
    ctrlKey: mods.has("ctrl"),
    shiftKey: mods.has("shift"),
    altKey: mods.has("alt"),
    metaKey: mods.has("meta"),
    bubbles: true,
    cancelable: true,
  };
}
