// Subtitle line times as mpv reports them, turned into playback times.

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
