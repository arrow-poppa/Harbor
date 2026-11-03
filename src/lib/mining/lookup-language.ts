import { useSyncExternalStore } from "react";
import type { Settings } from "@/lib/settings";
import { lookupLanguageForTrack } from "./word-audio-core";

// The language of the subtitle track on screen, set by the player, so lookups
// and word audio follow what is being watched (Settings → Subtitle language →
// "Detect from the subtitle track").
let trackLanguage: string | null = null;
const listeners = new Set<() => void>();

export function setSubtitleTrackLanguage(lang?: string | null): void {
  const next = lookupLanguageForTrack(lang);
  if (next === trackLanguage) return;
  trackLanguage = next;
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** The track's language when detection is on and the track names one we know,
 *  otherwise the chosen subtitle language. */
export function effectiveLookupLanguage(settings: Settings): string {
  return (
    (settings.subLookupLanguageFromTrack !== false && trackLanguage) ||
    settings.subLookupLanguage ||
    "japanese"
  );
}

export function useLookupLanguage(settings: Settings): string {
  useSyncExternalStore(
    subscribe,
    () => trackLanguage,
    () => null,
  );
  return effectiveLookupLanguage(settings);
}
