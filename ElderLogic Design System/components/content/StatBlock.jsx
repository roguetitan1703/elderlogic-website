import React from 'react';

/** One large number with its subject underneath — e.g. "2,621 Arizona senior living & care facilities". */
export function StatBlock({ value, label, note, tone = 'default', size = 'lg', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
        fontSize: size === 'lg' ? 'var(--fs-stat)' : 'var(--fs-display-3)',
        lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-display)',
        color: dark ? 'var(--n-0)' : 'var(--navy-700)', fontVariantNumeric: 'tabular-nums',
      }}>{value}</span>
      <span style={{
        fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-snug)', maxWidth: '22ch',
        color: dark ? 'var(--navy-200)' : 'var(--text-body)',
      }}>{label}</span>
      {note && <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', letterSpacing: 'var(--ls-mono)',
        color: dark ? 'var(--green-300)' : 'var(--green-700)',
      }}>{note}</span>}
    </div>
  );
}
