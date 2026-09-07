import React from 'react';

/** A quoted line from the field, set in the display serif. Attribution is required. */
export function PullQuote({ children, attribution, role, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)', maxWidth: '34ch', ...style }} {...rest}>
      <span aria-hidden="true" style={{ width: 32, height: 3, background: dark ? 'var(--green-400)' : 'var(--green-500)' }} />
      <blockquote style={{
        margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-3)',
        lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-display)',
        color: dark ? 'var(--n-0)' : 'var(--text-strong)',
      }}>{children}</blockquote>
      {attribution && <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: dark ? 'var(--navy-200)' : 'var(--text-muted)' }}>
        {attribution}{role ? ' · ' + role : ''}
      </figcaption>}
    </figure>
  );
}
