import { footer } from "@/content/copy";

/**
 * The chart's back page: contact, index, provenance.
 *
 * Column labels are plain text, not the small caps eyebrow the old footer used.
 * Eyebrows are off this site entirely.
 */
export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot__inner">
        <div className="foot__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="ElderLogic" height={24} />
          <p className="foot__tagline">{footer.tagline}</p>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.heading} className="foot__col" aria-label={col.heading}>
            <p className="foot__colhead">{col.heading}</p>
            {col.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}

        <div className="foot__col">
          <p className="foot__colhead">Contact</p>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
          <a href={`tel:${footer.phone.replace(/[^\d+]/g, "")}`}>{footer.phone}</a>
          <span className="foot__place">{footer.location}</span>
        </div>
      </div>

      <div className="foot__base">
        <p>{footer.sourceNote}</p>
        <p>{footer.legal}</p>
      </div>
    </footer>
  );
}
