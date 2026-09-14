import { nav } from "@/content/copy";

/**
 * The chart header rail.
 *
 * There is no menu. A one page site with a single action does not need one, and
 * the client called the previous hamburger bad, correctly: it hid three links
 * behind a tap on a page that scrolls past all three anyway. On a phone this is
 * the mark and the action, nothing else. The links appear from 720px, where
 * there is room for them inline.
 *
 * Not fixed, and not dark. A bar pinned over the page spent the top of every
 * viewport on itself; the action repeats at the close, which is where a reader
 * who has read the page actually books.
 */
export default function SiteHeader() {
  return (
    <header className="rail">
      <div className="rail__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rail__mark" src="/logo.svg" alt="ElderLogic" height={24} />

        <nav className="rail__nav" aria-label="Sections">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary rail__cta" href={nav.ctaHref}>
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
