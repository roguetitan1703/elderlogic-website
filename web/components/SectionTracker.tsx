"use client";

import { useEffect } from "react";
import { recordSection } from "@/lib/track";

/**
 * Keeps track of how far down the page the reader has actually got.
 *
 * Mounted once, at the root. It observes nothing until it is scrolled, adds
 * one passive listener, and does its work inside a single animation frame, so
 * it cannot contribute to input delay.
 *
 * A section counts as reached when its top passes the middle of the viewport,
 * not when it first peeks in at the bottom. A heading clipping into view is
 * not the same as having read the section, and counting it as such would
 * credit every section to every reader.
 *
 * The value only ever moves forward. See the note in lib/track.ts for why.
 */
export default function SectionTracker() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section[id]"),
    );
    if (!sections.length) return;

    let deepest = -1;
    let queued = false;

    const measure = () => {
      queued = false;
      const middle = window.innerHeight / 2;
      for (let i = sections.length - 1; i > deepest; i--) {
        if (sections[i].getBoundingClientRect().top <= middle) {
          deepest = i;
          recordSection(sections[i].id);
          break;
        }
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
