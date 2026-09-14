"use client";

import { useEffect, useState } from "react";
import { chartIndex } from "@/content/copy";

/**
 * The chart's tabs, as the page's index.
 *
 * This is the signature element. Until it existed the chart lived in code
 * comments and hairline rules: a reviewer could read the whole page without
 * ever naming the metaphor. A physical chart is navigated by the tabs on its
 * edge, so the page is too.
 *
 * It is not decoration. It is the only navigation on the page below 760px,
 * where the header carries just the mark and the action, and it answers the
 * two real complaints about a 7,600px scroll: where am I, and how do I get
 * back.
 *
 * The active tab is filled, not merely tinted, so position survives greyscale
 * and a colour blind reader. `aria-current` carries the same fact to a screen
 * reader.
 */
export default function ChartIndex() {
  const [active, setActive] = useState<string>(chartIndex[0].href);

  useEffect(() => {
    const targets = chartIndex
      .map((t) => document.querySelector(t.href))
      .filter((el): el is Element => Boolean(el));

    if (!targets.length || !("IntersectionObserver" in window)) return;

    const seen = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          seen.set(`#${e.target.id}`, e.isIntersecting ? e.intersectionRatio : 0);
        }
        let best = "";
        let bestRatio = 0;
        for (const [href, ratio] of seen) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = href;
          }
        }
        if (best) setActive(best);
      },
      { threshold: [0, 0.25, 0.5, 1], rootMargin: "-20% 0px -55% 0px" },
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="index" aria-label="Sections of this page">
      <ol className="index__list">
        {chartIndex.map((tab) => {
          const on = tab.href === active;
          return (
            <li key={tab.href} className={on ? "index__tab is-on" : "index__tab"}>
              <a href={tab.href} aria-current={on ? "true" : undefined}>
                {tab.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
