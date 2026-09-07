import React from 'react';

/** Native select styled to match TextInput, with the app's "-Select-" empty state. */
export function SelectInput({ options = [], placeholder = '-Select-', invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: 'relative', ...style }}>
      <select
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', minHeight: 44, padding: '11px 38px 11px 13px', appearance: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--navy-800)',
          background: 'var(--n-0)', borderRadius: 'var(--radius-control)',
          border: '1px solid ' + (invalid ? 'var(--feedback-error)' : focus ? 'var(--green-600)' : 'var(--border-default)'),
          boxShadow: focus && !invalid ? 'var(--shadow-focus)' : 'none',
          outline: 'none', transition: 'var(--transition-control)',
        }}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ position: 'absolute', right: 13, top: '50%', marginTop: -7, pointerEvents: 'none' }}>
        <path d="M3 5.5L7 9.5l4-4" fill="none" stroke="var(--n-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
