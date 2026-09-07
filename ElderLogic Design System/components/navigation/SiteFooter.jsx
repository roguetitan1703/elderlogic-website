import React from 'react';
import { Logo } from '../brand/Logo.jsx';

/** Site footer on navy, with the real contact details from the brand material. */
export function SiteFooter({ columns = [], assetBase = '', style, ...rest }) {
  return (
    <footer style={{ background: 'var(--surface-dark)', color: 'var(--navy-200)', ...style }} {...rest}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'var(--sp-16) var(--gutter) var(--sp-10)',
        display: 'grid', gap: 'var(--sp-10)', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          <Logo variant="full-white" height={44} assetBase={assetBase} />
          <div style={{ display: 'grid', gap: 'var(--sp-1)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)' }}>
            <span>elderlogic.app</span>
            <span>hello@elderlogic.app</span>
            <span>(480) 685-5657</span>
          </div>
        </div>
        {columns.map((c) => (
          <div key={c.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
              letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--n-0)',
            }}>{c.title}</span>
            {c.links.map((l) => (
              <a key={l.label} href={l.href} style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--navy-200)', borderBottom: 'none' }}>{l.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sp-5) var(--gutter)',
          display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-4)', justifyContent: 'space-between',
          fontSize: 'var(--fs-caption)', color: 'var(--navy-300)',
        }}>
          <span>&copy; 2026 ElderLogic. Arizona.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>Facility data published by AZDHS · refreshed monthly</span>
        </div>
      </div>
    </footer>
  );
}
