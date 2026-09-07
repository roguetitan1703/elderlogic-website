import React from 'react';

/**
 * Published state-record fields as label/value rows. Values are shown verbatim in mono —
 * no scores, no ranks, no colour-coded status. See readme.md → "The no-rating rule".
 */
export function RecordList({ rows = [], columns = 1, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <dl style={{
      margin: 0, display: 'grid', gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      borderTop: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-hairline)'), ...style,
    }} {...rest}>
      {rows.map((r) => (
        <div key={r.label} style={{
          display: 'flex', justifyContent: 'space-between', gap: 'var(--sp-4)',
          padding: 'var(--sp-3) 0',
          borderBottom: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-hairline)'),
        }}>
          <dt style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: dark ? 'var(--navy-200)' : 'var(--text-muted)' }}>{r.label}</dt>
          <dd style={{
            margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body-sm)',
            letterSpacing: 'var(--ls-mono)', fontVariantNumeric: 'tabular-nums', textAlign: 'right',
            color: dark ? 'var(--n-0)' : 'var(--navy-800)',
          }}>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
