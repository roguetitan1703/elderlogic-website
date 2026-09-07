import React from 'react';

/** Quiet inline "keep reading" link. The arrow slides 3px on hover — the only motion in the system. */
export function ArrowLink({ children, tone = 'default', href = '#', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'onDark' ? 'var(--n-0)' : 'var(--green-700)';
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)',
        color, textDecoration: 'none', borderBottom: 'none',
        opacity: hover && tone === 'onDark' ? 0.8 : 1,
        transition: 'var(--transition-control)', ...style,
      }}
      {...rest}
    >
      {children}
      <span style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-standard)' }} aria-hidden="true">&#8594;</span>
    </a>
  );
}
