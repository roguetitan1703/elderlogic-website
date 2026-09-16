"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/copy";

/** The only fixed element on the page. Transparent over the hero, and it takes
 *  a dark surface once you scroll past it. Full-width sheet below 900px. */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${stuck ? "is-stuck" : ""}`}>
      <div className="container site-header__inner">
        <a href="/" className="site-header__logo" aria-label="ElderLogic, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="ElderLogic" height={28} />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary site-header__cta" href={nav.cta.href}>
          {nav.cta.label}
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
            {open ? (
              <>
                <path d="M2 2l14 10M16 2L2 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" fill="none" />
              </>
            ) : (
              <>
                <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" fill="none" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div id="site-menu" className="site-header__sheet" hidden={!open}>
        <div className="container stack">
          {nav.items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--primary" href={nav.cta.href} onClick={() => setOpen(false)}>
            {nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
