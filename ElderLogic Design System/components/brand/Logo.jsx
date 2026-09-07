import React from 'react';

const LOGO_SRC = {
  full: 'assets/logo.svg',
  'full-white': 'assets/logo-white.svg',
  'full-black': 'assets/logo-black.svg',
  mark: 'assets/favicon-512.svg',
};

/**
 * The ElderLogic lockup. Always the supplied SVG — never retyped, never recoloured
 * beyond the three provided files.
 */
export function Logo({ variant = 'full', height, assetBase = '', className, style, ...rest }) {
  const isMark = variant === 'mark';
  const h = height || (isMark ? 32 : 44);
  return (
    <img
      src={(assetBase ? assetBase.replace(/\/$/, '') + '/' : '') + LOGO_SRC[variant]}
      alt="ElderLogic — Smarter Placement, Better Outcomes"
      className={className}
      style={{ height: h, width: 'auto', ...style }}
      {...rest}
    />
  );
}
