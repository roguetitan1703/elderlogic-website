import React from 'react';

/** Hairline-bordered surface. Shadow only appears when `interactive` and hovered. */
export function Card({ children, padding = 'md', tone = 'default', interactive = false, as = 'div', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const pads = { none: 0, sm: 'var(--sp-4)', md: 'var(--sp-6)', lg: 'var(--sp-8)' };
  const tones = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-hairline)' },
    inset: { background: 'var(--surface-inset)', border: '1px solid var(--border-hairline)' },
    paper: { background: 'var(--surface-paper)', border: '1px solid var(--paper-200)' },
    onDark: { background: 'rgba(255,255,255,.04)', border: '1px solid var(--border-dark)' },
    outline: { background: 'transparent', border: '1px solid var(--border-default)' },
  };
  return (
    <Tag
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-card)', padding: pads[padding],
        boxShadow: interactive && hover ? 'var(--shadow-2)' : 'var(--shadow-none)',
        transition: 'var(--transition-control)',
        textDecoration: 'none',
        ...tones[tone],
        ...(interactive && hover ? { borderColor: 'var(--border-default)' } : null),
        ...style,
      }}
      {...rest}
    >{children}</Tag>
  );
}
