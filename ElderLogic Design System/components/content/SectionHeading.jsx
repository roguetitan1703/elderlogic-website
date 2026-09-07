import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

const HEADING_SIZES = { xl: 'var(--fs-display-2)', lg: 'var(--fs-display-3)', md: 'var(--fs-h1)' };

/** Eyebrow + serif headline + optional lead paragraph. The standard opener for every section. */
export function SectionHeading({ eyebrow, title, lead, size = 'lg', align = 'left', tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: 'var(--measure)', ...style,
    }} {...rest}>
      {eyebrow && <Eyebrow tone={dark ? 'onDark' : 'brand'}>{eyebrow}</Eyebrow>}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: HEADING_SIZES[size], lineHeight: 'var(--lh-snug)',
        letterSpacing: 'var(--ls-display)', fontWeight: 'var(--fw-semibold)',
        color: dark ? 'var(--n-0)' : 'var(--text-strong)', margin: 0,
      }}>{title}</h2>
      {lead && <p style={{
        fontSize: 'var(--fs-lead)', lineHeight: 'var(--lh-body)', maxWidth: 'var(--measure-narrow)',
        color: dark ? 'var(--navy-200)' : 'var(--text-body)',
      }}>{lead}</p>}
    </div>
  );
}
