import { footer } from "@/content/copy";

export default function SiteFooter() {
  return (
    <footer className="site-footer surface-dark">
      <div className="container site-footer__inner">
        <div className="stack">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="ElderLogic" height={26} />
          <p className="body-sm site-footer__tagline">{footer.tagline}</p>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.heading} className="stack-tight" aria-label={col.heading}>
            <span className="eyebrow">{col.heading}</span>
            {col.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        ))}

        <div className="stack-tight site-footer__contact">
          <a className="mono" href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
          <a className="mono" href={`tel:${footer.phone.replace(/[^\d+]/g, "")}`}>
            {footer.phone}
          </a>
          <span className="mono site-footer__location">{footer.location}</span>
        </div>
      </div>

      <div className="container site-footer__base">
        <p className="caption">{footer.source}</p>
        <p className="caption">{footer.legal}</p>
      </div>
    </footer>
  );
}
