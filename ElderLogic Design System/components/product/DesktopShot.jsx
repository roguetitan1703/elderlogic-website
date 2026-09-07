import React from 'react';

const DESKTOP_SHOTS = {
  map: { src: 'assets/product/desk-map.png', alt: 'ElderLogic map of Arizona senior living communities' },
  clients: { src: 'assets/product/desk-clients.png', alt: 'ElderLogic client list' },
};

/** A supplied desktop product screenshot in its monitor. Use sparingly — the phone leads. */
export function DesktopShot({ shot = 'map', width = 720, caption, assetBase = '', style, ...rest }) {
  const s = DESKTOP_SHOTS[shot];
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', ...style }} {...rest}>
      <img src={base + s.src} alt={s.alt} style={{ width, height: 'auto', filter: 'drop-shadow(0 28px 56px rgba(11,26,48,.18))' }} />
      {caption && <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{caption}</figcaption>}
    </figure>
  );
}
