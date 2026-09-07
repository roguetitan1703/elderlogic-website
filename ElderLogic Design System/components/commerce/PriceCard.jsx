import React from 'react';
import { CheckList } from './CheckList.jsx';

/** A plan or add-on: price, cadence, what it is, what it includes. */
export function PriceCard({ name, price, cadence = '/month', addon, description, items = [], footnote, emphasis = false, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)',
      background: emphasis ? 'var(--navy-800)' : 'var(--surface-card)',
      border: '1px solid ' + (emphasis ? 'var(--navy-800)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-card)', padding: 'var(--sp-8)', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
          letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
          color: emphasis ? 'var(--green-300)' : 'var(--green-700)',
        }}>{name}</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-2)', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-3)', fontWeight: 'var(--fw-semibold)',
            letterSpacing: 'var(--ls-display)', color: emphasis ? 'var(--n-0)' : 'var(--navy-700)',
            fontVariantNumeric: 'tabular-nums',
          }}>{price}</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: emphasis ? 'var(--navy-200)' : 'var(--text-muted)' }}>{cadence}</span>
        </div>
        {addon && <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)',
          color: emphasis ? 'var(--navy-200)' : 'var(--text-body)',
        }}>{addon}</span>}
      </div>
      {description && <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: emphasis ? 'var(--navy-200)' : 'var(--text-body)' }}>{description}</p>}
      {items.length > 0 && <CheckList items={items} tone={emphasis ? 'onDark' : 'default'} />}
      {footnote && <span style={{ fontSize: 'var(--fs-caption)', color: emphasis ? 'var(--navy-300)' : 'var(--text-muted)', marginTop: 'auto' }}>{footnote}</span>}
    </div>
  );
}
