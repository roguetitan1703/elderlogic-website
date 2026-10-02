"use client";

import { useEffect, useRef, useState } from "react";
import { footer, nav } from "@/content/copy";
import { headerTheme } from "@/content/site";
import { BookButton } from "@/components/Booking";

/**
 * The header, and on a phone the only navigation there is.
 *
 * The menu is a full panel rather than a dropdown sheet. The sheet was a white
 * strip hanging under a navy bar, which fought the header it belonged to and
 * gave four links less room than the footer gives them. A panel has room for
 * the contact details and the call to action, which is what someone opening a
 * menu on a phone is usually looking for.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [theme, setTheme] = useState(headerTheme);

  /* Lets the client compare both headers on the live preview without a
     second deployment: ?header=light or ?header=dark, kept for the tab. */
  useEffect(() => {
    try {
      const asked = new URLSearchParams(window.location.search).get("header");
      if (asked === "light" || asked === "dark") sessionStorage.setItem("header", asked);
      const kept = sessionStorage.getItem("header");
      if (kept === "light" || kept === "dark") setTheme(kept);
    } catch {
      /* Storage blocked: the default stands. */
    }
  }, []);
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    /* The panel covers the page, so the page must not scroll behind it.
       Padding replaces the scrollbar's width so the header does not jump. */
    const { body } = document;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      /* Keep Tab inside the panel: behind it the whole page is still in the
         tab order and focus would walk off into content nobody can see. */
      const focusable = panel.current.querySelectorAll<HTMLElement>("a, button");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#top">
        {nav.menu.skip}
      </a>
      <header
        className={[
          "site-header",
          theme === "light" ? "site-header--light" : "",
          stuck ? "is-stuck" : "",
          open ? "is-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="container site-header__inner">
          <a href="/" className="site-header__logo" aria-label="ElderLogic, home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* Both lockups are always in the markup and CSS shows one, so
                switching themes, or opening the menu over a light bar, never
                waits on an image request. 250 x 100 is the files' own ratio. */}
            <img className="logo--white" src="/logo-white.svg" alt="" width={100} height={40} />
            <img className="logo--colour" src="/logo-colour.svg" alt="" width={100} height={40} />
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            {nav.items.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <BookButton className="btn btn--primary site-header__cta" where="header">
            {nav.cta.label}
          </BookButton>

          <button
            ref={toggle}
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="site-header__toggle-label">
              {open ? nav.menu.close : nav.menu.open}
            </span>
            <span className="burger" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        ref={panel}
        className={`site-menu ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        <nav className="site-menu__nav" aria-label="Menu">
          {nav.items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ ["--i" as string]: String(i) }}
            >
              <span>{item.label}</span>
              <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true" focusable="false">
                <path
                  d="M2 11L11 2M11 2H4M11 2v7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          ))}
        </nav>

        <div className="site-menu__foot">
          <BookButton
            className="btn btn--primary site-menu__cta"
            where="phone-menu"
            onActivate={() => setOpen(false)}
          >
            {nav.cta.label}
          </BookButton>
          <p className="site-menu__lead">{nav.menu.contactLead}</p>
          <a className="site-menu__contact mono" href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
          <a
            className="site-menu__contact mono"
            href={`tel:${footer.phone.replace(/[^\d+]/g, "")}`}
          >
            {footer.phone}
          </a>
        </div>
      </div>
    </>
  );
}
