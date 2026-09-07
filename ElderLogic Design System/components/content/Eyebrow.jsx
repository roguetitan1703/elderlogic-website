import React from 'react';

/** Small uppercase label above a heading. Mirrors the deck's "UPDATED MONTHLY" kickers. */
export function Eyebrow({ children, tone = 'brand', rule = false, style, ...rest }) {
  const color = tone === 'onDark' ? 'var(--navy-200)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--green-700)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', ...style }} {...rest}>
      {rule && <span aria-hidden="true" style={{ width: 24, height: 2, background: tone === 'onDark' ? 'var(--green-400)' : 'var(--green-500)' }} />}
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color, lineHeight: 1.4,
      }}>{children}</span>
    </div>
  );
}
