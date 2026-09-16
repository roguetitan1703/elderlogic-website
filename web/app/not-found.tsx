import type { Metadata } from "next";
import Link from "next/link";
import { close, nav, notFound } from "@/content/copy";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
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
              <nav className="stack-tight">
                {nav.items.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
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
