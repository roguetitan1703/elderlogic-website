"use client";

import { useEffect, useRef, useState } from "react";

/** One-time reveal on entry: fade + 8px rise, --dur-reveal.
 *  Nothing here advances anything — it only fades a block in once. */
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
    return () => io.disconnect();
  }, [seen]);

  const Component = Tag as any;
  return (
    <Component ref={ref} className={`reveal ${seen ? "is-in" : ""} ${className}`.trim()}>
      {children}
    </Component>
  );
}
