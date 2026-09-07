import React from 'react';

/** CSS phone bezel for live HTML mockups (not screenshots). 375x812 content area by default. */
export function PhoneFrame({ children, width = 320, tone = 'dark', statusBar = true, style, ...rest }) {
  const scale = width / 375;
  return (
    <div style={{ width, height: 812 * scale, position: 'relative', ...style }} {...rest}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'var(--radius-device)',
        background: tone === 'dark' ? 'var(--navy-900)' : 'var(--n-800)',
        padding: 10 * Math.max(scale, .7), boxShadow: 'var(--shadow-device)',
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 'calc(var(--radius-device) - 8px)', overflow: 'hidden', background: 'var(--n-0)', position: 'relative' }}>
          {statusBar && (
            <div style={{
              height: 34, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0 var(--sp-5)', fontFamily: 'var(--font-sans)', fontSize: 12,
              fontWeight: 'var(--fw-semibold)', color: 'var(--navy-800)', flex: '0 0 auto',
            }}>
              <span>9:41</span>
              <span style={{ display: 'flex', gap: 4, alignItems: 'center' }} aria-hidden="true">
                <span style={{ width: 16, height: 8, border: '1px solid var(--navy-800)', borderRadius: 2 }} />
              </span>
            </div>
          )}
          <div style={{ position: 'absolute', top: statusBar ? 34 : 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
