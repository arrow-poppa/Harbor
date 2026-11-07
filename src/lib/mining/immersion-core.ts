// Pure helpers of the immersion cards, kept free of Tauri and settings imports.

/** What turns subtitle times into playback times (see subToPlaybackTime). */
export type SubTiming = { subDelaySec: number; subtitleFps?: number; videoFps?: number };

type Snap = SubTiming & {
  subText: string;
  subStartSec: number;
  subEndSec?: number;
};

/** What subtitle times are multiplied by on screen. mpv's sub-fps retimes a
 *  subtitle made for another frame rate, and sub-start/sub-end stay in the
 *  file's own times (measured on mpv 0.41: with sub-fps 48 on a 24 fps video a
 *  10–12s line shows at 20–24s). Harbor never sets sub-speed. */
export function subtitleTimeScale(snap: Omit<SubTiming, "subDelaySec">): number {
  const { subtitleFps, videoFps } = snap;
  return subtitleFps && videoFps && subtitleFps > 0 && videoFps > 0 ? subtitleFps / videoFps : 1;
}

/** A subtitle time (a cue, or mpv's sub-start/sub-end) in playback time.
 *  sub-delay is left out of them too (with a 2s delay a 5–8s line shows at
 *  7–10s and sub-start still says 5). */
export function subToPlaybackTime(time: number, snap: SubTiming): number {
  const delay = Number.isFinite(snap.subDelaySec) ? snap.subDelaySec : 0;
  return time * subtitleTimeScale(snap) + delay;
}

/** A playback time in the subtitle's own times (the inverse of subToPlaybackTime). */
export function playbackToSubTime(time: number, snap: SubTiming): number {
  const delay = Number.isFinite(snap.subDelaySec) ? snap.subDelaySec : 0;
  return (time - delay) / subtitleTimeScale(snap);
}

/** The line on screen in playback time, or null without one. */
export function lineFromSnapshot(snap: Snap): { text: string; start: number; end: number } | null {
  const text = snap.subText.trim();
  if (!text || snap.subEndSec == null || !(snap.subEndSec > snap.subStartSec)) return null;
  return {
    text,
    start: subToPlaybackTime(snap.subStartSec, snap),
    end: subToPlaybackTime(snap.subEndSec, snap),
  };
}

/** Appends a line seen during a recording, skipping repeats (VTT often
 *  repeats a line across consecutive cues). */
export function pushLine(lines: string[], text: string): void {
  const line = text.trim();
  if (line && lines[lines.length - 1] !== line) lines.push(line);
}

/** The newest note id when it was added within `windowMin` minutes. A note id
 *  is its creation time in milliseconds. */
export function newestRecentNote(ids: number[], nowMs: number, windowMin: number): number | null {
  if (!ids.length) return null;
  const newest = Math.max(...ids);
  return nowMs - newest <= windowMin * 60_000 ? newest : null;
}

/** Fills a first field that would be empty without showing anything on the
 *  card. Anki refuses a note whose first field is empty and checks duplicates
 *  on it, so the marker is a zero-width fingerprint of the other fields:
 *  invisible, and different for every note. */
export function invisibleMarker(fields: Record<string, string>): string {
  const json = JSON.stringify(
    Object.keys(fields)
      .sort()
      .map((k) => [k, fields[k]]),
  );
  let a = 0x811c9dc5;
  let b = 0x01000193;
  for (let i = 0; i < json.length; i++) {
    const c = json.charCodeAt(i);
    a = Math.imul(a ^ c, 0x01000193) >>> 0;
    b = Math.imul(b ^ c, 0x5bd1e995) >>> 0;
  }
  const bits = a.toString(2).padStart(32, "0") + b.toString(2).padStart(32, "0");
  return Array.from(bits, (bit) => (bit === "0" ? "​" : "‌")).join("");
}
