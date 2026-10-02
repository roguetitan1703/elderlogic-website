import { footer } from "@/content/copy";
import { BookButton } from "@/components/Booking";

export default function SiteFooter() {
  return (
    <footer className="site-footer surface-dark">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="ElderLogic" width={203} height={46} />
          <p className="body-sm site-footer__tagline">{footer.tagline}</p>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.heading} className="site-footer__col" aria-label={col.heading}>
            <span className="eyebrow">{col.heading}</span>
            {col.links.map((link) =>
              /* The one footer link that is not a destination. It opens the
                 same dialog every other call to action opens, rather than
                 scrolling the reader back up to press a second button. */
              link.href === "/#book" ? (
                <BookButton key={link.href} className="site-footer__book" where="footer">
                  {link.label}
                </BookButton>
              ) : (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              )
            )}
          </nav>
        ))}

        <div className="site-footer__col site-footer__contact">
          <span className="eyebrow">{footer.contactHeading}</span>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
          <a href={`tel:${footer.phone.replace(/[^\d+]/g, "")}`}>{footer.phone}</a>
          <span className="site-footer__location">{footer.location}</span>
        </div>
      </div>

      <div className="container site-footer__base">
        <p className="caption">{footer.legal}</p>
        <p className="caption">{footer.baseNote}</p>
      </div>
    </footer>
  );
}
