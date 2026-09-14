"use client";

import { useEffect, useRef, useState } from "react";
import { calls } from "@/content/copy";

/**
 * Bars are linear against the largest value in the sequence, so the encoding
 * matches the numbers. A minimum width keeps the last two visible: two out of
 * two hundred is almost nothing, and reading as almost nothing is correct.
 */
const top = Math.max(...calls.funnel.map((r) => Number(r.value)));

/**
 * The outreach funnel: what two hundred homes narrows to.
 *
 * This is the one authored motion on the site. The bars scale out from their
 * left edge once, staggered, when the section first arrives. It is carrying
 * information rather than decorating: the narrowing is the point of the
 * section, and watching it narrow reads faster than comparing six numbers.
 *
 * scaleX, never width. Animating width is a layout property and thrashes; the
 * project's own detector flagged exactly that in the previous build.
 *
 * Under prefers-reduced-motion the bars are simply present at their final size
 * and nothing is lost, because every value is also written out as a figure.
 */
export default function CallLog() {
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={shown ? "funnel is-shown" : "funnel"} ref={ref}>
      {calls.funnel.map((row, i) => (
        <div className="funnel__row" key={row.label}>
          <span className="funnel__value">{row.value}</span>
          <span className="funnel__label">{row.label}</span>
          <span
            className="funnel__bar"
            style={
              {
                "--w": `${(Number(row.value) / top) * 100}%`,
                "--i": i,
              } as React.CSSProperties
            }
          />
        </div>
      ))}
      <p className="funnel__note">{calls.funnelNote}</p>
    </div>
  );
}
