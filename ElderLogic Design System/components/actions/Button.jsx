import React from 'react';

const BUTTON_SIZES = {
  sm: { padding: '8px 14px', fontSize: 'var(--fs-caption)' },
  md: { padding: '12px 20px', fontSize: 'var(--fs-body-sm)' },
  lg: { padding: '15px 26px', fontSize: 'var(--fs-body)' },
};

const BUTTON_VARIANTS = {
  primary: { background: 'var(--green-600)', color: 'var(--n-0)', border: '1px solid var(--green-600)' },
  secondary: { background: 'var(--n-0)', color: 'var(--navy-700)', border: '1px solid var(--border-default)' },
  quiet: { background: 'transparent', color: 'var(--navy-700)', border: '1px solid transparent' },
  onDark: { background: 'var(--n-0)', color: 'var(--navy-800)', border: '1px solid var(--n-0)' },
  onDarkGhost: { background: 'transparent', color: 'var(--n-0)', border: '1px solid var(--border-dark)' },
};

const BUTTON_HOVER = {
  primary: { background: 'var(--green-700)', borderColor: 'var(--green-700)' },
  secondary: { background: 'var(--n-50)', borderColor: 'var(--border-strong)' },
  quiet: { background: 'var(--n-50)' },
  onDark: { background: 'var(--navy-50)', borderColor: 'var(--navy-50)' },
  onDarkGhost: { background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.28)' },
};

/** Primary action control. One primary per view; everything else is secondary or quiet. */
export function Button({ variant = 'primary', size = 'md', as = 'button', full = false, disabled = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      style={{
        display: full ? 'flex' : 'inline-flex',
        width: full ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--sp-2)',
        minHeight: size === 'sm' ? 36 : 44,
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: '.01em',
        lineHeight: 1.2,
        borderRadius: 'var(--radius-control)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        textDecoration: 'none',
        borderBottom: undefined,
        opacity: disabled ? 0.45 : 1,
        transform: down && !disabled ? 'translateY(1px)' : 'none',
        transition: 'var(--transition-control),transform var(--dur-fast) var(--ease-standard)',
        ...BUTTON_SIZES[size],
        ...BUTTON_VARIANTS[variant],
        ...(hover && !disabled ? BUTTON_HOVER[variant] : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
