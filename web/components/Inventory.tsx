"use client";

import { useEffect, useRef, useState } from "react";
import { inventory } from "@/content/copy";

/**
 * What your team gets.
 *
 * The brief: two long flat lists read as a wall, worst on a phone. The reader
 * should be able to take all of it in, at their own pace, choosing what to
 * look at. Not an accordion, which hides everything until asked. Not an icon
 * grid, which trades the content for decoration.
 *
 * So each group is a panel: its branded icon, a count, its heading, and its
 * items. On a wide screen the panels sit side by side and nothing is hidden.
 * On a phone they sit in one row the reader swipes through, with the next
 * panel always showing at the edge so it is obvious there is more. An index
 * above names every group and jumps to it, and marks the one in view.
 *
 * With no script, the row still scrolls and every panel is still there; the
 * index is the only part that needs JavaScript, and it is hidden until it
 * works.
 */
export default function Inventory() {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    setReady(true);
    const panels = Array.from(el.querySelectorAll<HTMLElement>(".inv__panel"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActive(panels.indexOf(entry.target as HTMLElement));
          }
        }
      },
      { root: el, threshold: [0.6] }
    );
    panels.forEach((panel) => io.observe(panel));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const el = rail.current;
    const panel = el?.querySelectorAll<HTMLElement>(".inv__panel")[i];
    if (!el || !panel) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: panel.offsetLeft - el.offsetLeft, behavior: reduce ? "auto" : "smooth" });
    setActive(i);
  };

  return (
    <div className="inv">
      <div className="inv__index" hidden={!ready}>
        {inventory.groups.map((group, i) => (
          <button
            key={group.heading}
            type="button"
            className="inv__tab"
            aria-current={active === i ? "true" : undefined}
            onClick={() => goTo(i)}
          >
            {group.heading}
          </button>
        ))}
      </div>

      <div
        ref={rail}
        className="inv__rail"
        role="region"
        aria-label={inventory.railLabel}
        tabIndex={0}
      >
        {inventory.groups.map((group) => (
          <article key={group.heading} className="inv__panel">
            <div className="inv__top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="inv__icon"
                src={`/icons/${group.icon}.svg`}
                alt=""
                width={40}
                height={40}
              />
              <span className="inv__count mono">
                {group.items.length} {inventory.countSuffix}
              </span>
            </div>
            <h3 className="inv__title">{group.heading}</h3>
            <ul className="inv__list">
              {group.items.map((item) => (
                <li key={item}>
                  <svg
                    className="inv__tick"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
