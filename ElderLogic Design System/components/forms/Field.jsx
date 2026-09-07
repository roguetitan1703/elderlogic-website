import React from 'react';

/** Label + control + help/error. 44px minimum control height, because reps fill these in the car. */
export function Field({ label, hint, error, required = false, htmlFor, children, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)', ...style }} {...rest}>
      <label htmlFor={htmlFor} style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', fontWeight: 'var(--fw-medium)',
        color: 'var(--navy-800)',
      }}>
        {label}{required && <span style={{ color: 'var(--green-600)' }} aria-hidden="true"> *</span>}
      </label>
      {children}
      {error
        ? <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--feedback-error)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{hint}</span> : null}
    </div>
  );
}
