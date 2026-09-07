import React from 'react';

/** Single-line text control. Focus is a green ring; error is a brick border. */
export function TextInput({ invalid = false, multiline = false, rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <Tag
      rows={multiline ? rows : undefined}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        width: '100%', minHeight: multiline ? undefined : 44, padding: '11px 13px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--navy-800)',
        background: 'var(--n-0)', borderRadius: 'var(--radius-control)',
        border: '1px solid ' + (invalid ? 'var(--feedback-error)' : focus ? 'var(--green-600)' : 'var(--border-default)'),
        boxShadow: focus && !invalid ? 'var(--shadow-focus)' : 'none',
        outline: 'none', transition: 'var(--transition-control)', resize: multiline ? 'vertical' : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}
