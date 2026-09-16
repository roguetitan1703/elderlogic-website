"use client";

import { useEffect, useRef, useState } from "react";

/** One-time reveal on entry: fade + 8px rise, --dur-reveal.
 *  Nothing here advances anything: it only fades a block in once.
 *
 *  This fails open, deliberately. The hiding rule is `.js .reveal { opacity: 0 }`,
 *  so whatever adds the `js` class decides whether half the page is visible. It
 *  used to be an inline script in <head>, which meant that if React then failed
 *  to run at all, for any reason, every section below the fold stayed invisible
 *  permanently and the page looked broken rather than unanimated. The class is
 *  now set from inside the effect, so it only ever appears when the code that
 *  can remove it is already running, and a timer reveals the block regardless if
 *  the observer has not fired. An animation is worth nothing next to the risk of
 *  a blank page. */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }

    // Only now is it safe to hide anything.
    document.documentElement.classList.add("js");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);

    // Failsafe. If the observer has not fired by now the block is shown anyway:
    // a section that never appears is a far worse bug than one that appears
    // without its fade.
    const failOpen = window.setTimeout(() => {
      setSeen(true);
      io.disconnect();
    }, 4000);

    return () => {
      window.clearTimeout(failOpen);
      io.disconnect();
    };
  }, [seen]);

  const Component = Tag as any;
  return (
    <Component ref={ref} className={`reveal ${seen ? "is-in" : ""} ${className}`.trim()}>
      {children}
    </Component>
  );
}
