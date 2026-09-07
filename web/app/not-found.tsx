import type { Metadata } from "next";
import Link from "next/link";
import { close, nav } from "@/content/copy";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
    <>
      <SiteHeader />

      <main id="top">
        <section className="section">
          <div className="container">
            <span className="eyebrow">404</span>
            <div className="intro">
              <h1 className="display-2 intro__heading">This page is not here.</h1>
              <div className="stack">
                <p className="lead">
                  The link may be old, or the address may have a typo in it. Everything on
                  the site is one of these:
                </p>
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
                    Back to the start <span aria-hidden="true">&#8594;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
