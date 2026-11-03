import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSettings } from "@/lib/settings";
import { LookupPopup } from "./lookup-popup";
import { useSubtitleLookup, type LookupControls, type LookupHit } from "./use-subtitle-lookup";

type Props = {
  lines: string[];
  textStyle: React.CSSProperties;
  boxStyle?: React.CSSProperties;
  controls: LookupControls;
  // ASS/native mode: mpv draws the subtitle; this copy stays invisible until
  // hovered, then replaces mpv's rendering while the user reads/looks up.
  native: boolean;
};

export function InteractiveSubtitle({ lines, textStyle, boxStyle, controls, native }: Props) {
  const { settings } = useSettings();
  const lookup = useSubtitleLookup({
    lines,
    language: settings.subLookupLanguage || "japanese",
    pauseOnHover: settings.subLookupPauseOnHover,
    controls,
    scanKey: settings.subLookupScanKey ?? "none",
    scanDelayMs: settings.subLookupScanDelayMs ?? 20,
  });
  const markRef = useRef<HTMLSpanElement>(null);
  const [anchor, setAnchor] = useState<DOMRect | null>(null);
  const [hovering, setHovering] = useState(false);
  const revealed = !native || hovering || lookup.open;
  const stayOpen = settings.subLookupStayOpen;
  const rootRef = useRef<HTMLDivElement>(null);

  // With "keep open", the first click outside the subtitle and the popup only
  // dismisses it; that click is swallowed so it does not also toggle playback.
  const closeLookup = lookup.close;
  useEffect(() => {
    if (!stayOpen || !lookup.open) return;
    const inside = (target: EventTarget | null) =>
      target instanceof Element &&
      (!!target.closest(".hb-lookup-popup") || !!rootRef.current?.contains(target));
    const onDown = (e: PointerEvent) => {
      if (inside(e.target)) return;
      e.stopPropagation();
      // Closing unmounts this effect before the matching mousedown/click
      // arrive, so they are swallowed by listeners that outlive it.
      const swallow = (ev: Event) => {
        ev.stopPropagation();
        ev.preventDefault();
        if (ev.type === "click") done();
      };
      const done = () => {
        window.removeEventListener("mousedown", swallow, true);
        window.removeEventListener("click", swallow, true);
        window.clearTimeout(timer);
      };
      // A drag that ends elsewhere fires no click; stop waiting for it.
      const timer = window.setTimeout(done, 1000);
      window.addEventListener("mousedown", swallow, true);
      window.addEventListener("click", swallow, true);
      closeLookup();
    };
    window.addEventListener("pointerdown", onDown, true);
    return () => window.removeEventListener("pointerdown", onDown, true);
  }, [stayOpen, lookup.open, closeLookup]);

  useLayoutEffect(() => {
    setAnchor(lookup.open && markRef.current ? markRef.current.getBoundingClientRect() : null);
  }, [lookup.open, lookup.hit]);

  // Swap mpv's own subtitle for this copy while it is revealed.
  const controlsRef = useRef(controls);
  controlsRef.current = controls;
  useEffect(() => {
    if (!native) return;
    controlsRef.current.setNativeSubVisible(!revealed);
  }, [native, revealed]);
  useEffect(
    () => () => {
      if (native) controlsRef.current.setNativeSubVisible(true);
    },
    [native],
  );

  const hiddenText: React.CSSProperties = { color: "transparent", textShadow: "none" };
  return (
    <div
      ref={rootRef}
      className="pointer-events-auto max-w-[80%] cursor-text"
      style={revealed ? boxStyle : undefined}
      onPointerEnter={() => {
        lookup.cancelClose();
        setHovering(true);
      }}
      onPointerLeave={() => {
        setHovering(false);
        lookup.onPointerExit();
        if (!lookup.pinned && !stayOpen) lookup.scheduleClose();
      }}
      onPointerMove={lookup.onPointerMove}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={lookup.onClick}
      onDoubleClick={(e) => e.stopPropagation()}
    >
      <div style={revealed ? textStyle : { ...textStyle, ...hiddenText }}>
        {lines.map((line, i) => (
          <Line
            key={i}
            index={i}
            text={line}
            hit={lookup.hit}
            markRef={markRef}
            visible={revealed}
          />
        ))}
      </div>
      {lookup.open && anchor && lookup.result && (
        <LookupPopup
          result={lookup.result}
          anchor={anchor}
          onEnter={() => {
            lookup.cancelClose();
            lookup.setPinned(true);
          }}
          onLeave={() => {
            lookup.setPinned(false);
            if (!stayOpen) lookup.scheduleClose();
          }}
          onClose={lookup.close}
        />
      )}
    </div>
  );
}

function Line({
  index,
  text,
  hit,
  markRef,
  visible,
}: {
  index: number;
  text: string;
  hit: LookupHit | null;
  markRef: React.RefObject<HTMLSpanElement | null>;
  visible: boolean;
}) {
  if (!hit || hit.line !== index) {
    return (
      <div>
        <span data-hb-line={index} data-hb-off={0}>
          {text}
        </span>
      </div>
    );
  }
  const a = hit.start;
  const b = Math.min(text.length, hit.start + hit.length);
  return (
    <div>
      {a > 0 && (
        <span data-hb-line={index} data-hb-off={0}>
          {text.slice(0, a)}
        </span>
      )}
      <span
        ref={markRef}
        data-hb-line={index}
        data-hb-off={a}
        className="rounded-[0.18em]"
        style={
          visible
            ? { background: "color-mix(in srgb, var(--color-accent) 42%, transparent)" }
            : undefined
        }
      >
        {text.slice(a, b)}
      </span>
      {b < text.length && (
        <span data-hb-line={index} data-hb-off={b}>
          {text.slice(b)}
        </span>
      )}
    </div>
  );
}
