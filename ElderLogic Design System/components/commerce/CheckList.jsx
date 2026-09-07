import React from 'react';

/** Included-items list. The tick is a hairline green check, never a filled badge. */
export function CheckList({ items = [], tone = 'default', dense = false, style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: dense ? 'var(--sp-2)' : 'var(--sp-3)', ...style }} {...rest}>
      {items.map((it) => (
        <li key={it} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 'var(--sp-3)', alignItems: 'start' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: 4 }}>
            <path d="M3 8.5l3.2 3.2L13 5" fill="none" stroke={dark ? 'var(--green-300)' : 'var(--green-600)'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: dark ? 'var(--navy-200)' : 'var(--text-body)' }}>{it}</span>
        </li>
      ))}
    </ul>
  );
}
