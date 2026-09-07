import React from 'react';

const PHONE_SHOTS = {
  assessment: { src: 'assets/product/phone-assessment.png', alt: 'ElderLogic client assessment form on a phone' },
  'visit-form': { src: 'assets/product/phone-visit-form.png', alt: 'ElderLogic marketing visit form on a phone' },
  route: { src: 'assets/product/phone-route.png', alt: 'ElderLogic optimised pre-tour route on a phone' },
};

/**
 * A real product phone screenshot presented at full weight — the primary way ElderLogic
 * shows the product, because liaisons work from a phone.
 */
export function PhoneShot({ shot = 'route', width = 320, caption, assetBase = '', style, ...rest }) {
  const s = PHONE_SHOTS[shot];
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', alignItems: 'flex-start', ...style }} {...rest}>
      <img src={base + s.src} alt={s.alt} style={{ width, height: 'auto', filter: 'drop-shadow(0 24px 48px rgba(11,26,48,.22))' }} />
      {caption && <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', maxWidth: width }}>{caption}</figcaption>}
    </figure>
  );
}
