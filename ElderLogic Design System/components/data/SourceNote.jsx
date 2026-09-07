import React from 'react';

/** Provenance line. Every published figure on the site carries one. */
export function SourceNote({ children, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <p style={{
      display: 'flex', alignItems: 'center', gap: 'var(--sp-2)',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', letterSpacing: 'var(--ls-mono)',
      color: dark ? 'var(--navy-300)' : 'var(--text-muted)', ...style,
    }} {...rest}>
      <span aria-hidden="true" style={{ width: 12, height: 1, background: dark ? 'var(--navy-300)' : 'var(--n-300)', flex: '0 0 auto' }} />
      {children}
    </p>
  );
}
