import React from 'react';

/** A capability: uppercase label + one explanatory sentence, hung off a green rule. */
export function FeatureItem({ label, children, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)',
      borderLeft: '3px solid ' + (dark ? 'var(--green-400)' : 'var(--green-500)'),
      paddingLeft: 'var(--sp-4)', ...style,
    }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
        color: dark ? 'var(--n-0)' : 'var(--navy-700)',
      }}>{label}</span>
      <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: dark ? 'var(--navy-200)' : 'var(--text-body)' }}>{children}</p>
    </div>
  );
}
