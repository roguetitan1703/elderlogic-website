"use client";

import { useEffect, useState } from "react";
import { toTop } from "@/content/copy";

/**
 * Back to top.
 *
 * The page is long and the only navigation below 900px is the header's menu, so
 * a reader three sections deep has no fast way back to the one call to action.
 * This is that, and nothing else: it is not a second CTA, and it does not
 * compete with "Book a demo" in the header, which is fixed and therefore
 * already on screen at all times.
 *
 * It appears only once there is something to go back to, which is why the
 * threshold is a viewport and a half rather than an arbitrary pixel count. It
 * hides again near the foot of the page, where the footer's own links do the
 * job and a floating control would sit on top of them.
 *
 * A real <button> with real text, not an icon alone: the label is visually
 * hidden at rest and the arrow carries it, but a screen reader and a keyboard
 * both get the whole control.
 */
export default function ToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearFoot =
        y + window.innerHeight > document.documentElement.scrollHeight - 320;
      setShown(y > window.innerHeight * 1.5 && !nearFoot);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`to-top ${shown ? "is-shown" : ""}`}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        // Send focus back to the top of the document, so a keyboard user's next
        // Tab continues from the header rather than from wherever they were.
        document.getElementById("top")?.focus({ preventScroll: true });
      }}
      aria-label={toTop.label}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
    >
      <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true" focusable="false">
        <path
          d="M7 15V2M7 2L1.5 7.5M7 2l5.5 5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="to-top__label">{toTop.label}</span>
    </button>
  );
}
