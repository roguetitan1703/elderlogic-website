import type { Metadata } from "next";
import Link from "next/link";
import { close, nav, notFound } from "@/content/copy";

export const metadata: Metadata = {
  title: "Page not found",
  /* The root layout sets a canonical of "/" and every route inherits it. On a
     404 that is actively harmful: it tells a crawler this page IS the home
     page, so a mistyped URL can end up indexed as the site's front door.
     null removes the tag rather than pointing it somewhere wrong.

     `robots` has to stay. Next emits its own noindex for this route, so the
     head carries two robots tags either way; without ours the second one is
     the root layout's "index, follow", and the page then tells a crawler
     both things at once. Both tags saying noindex is the tidier of the two
     available outcomes. */
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

/**
 * A 404 that does something useful. Someone who mistypes a URL or follows an
 * old link is still a reader, so this hands them the same routes the nav does
 * and the same action the page does, rather than apologising at them.
 */
export default function NotFound() {
  return (
    <main id="top" tabIndex={-1}>
      <section className="section">
        <div className="container">
          <span className="eyebrow">404</span>
          <div className="intro">
            <h1 className="display-2 intro__heading">{notFound.heading}</h1>
            <div className="stack">
              <p className="lead">{notFound.body}</p>
              <nav className="lost-nav" aria-label="Sections">
                {nav.items.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                    <span aria-hidden="true">&#8594;</span>
                  </Link>
                ))}
              </nav>
              <div className="actions">
                <Link className="btn btn--primary" href={close.cta.href}>
                  {close.cta.label}
                </Link>
                <Link className="arrow-link" href="/">
                  {notFound.back} <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
