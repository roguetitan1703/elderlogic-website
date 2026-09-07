import React from 'react';
import { PhoneShot } from './PhoneShot.jsx';

/** Three phone screens shown together at equal weight, staggered on wide viewports. */
export function PhoneRow({ shots = ['assessment', 'visit-form', 'route'], captions = [], width = 300, stagger = true, assetBase = '', style, ...rest }) {
  return (
    <div style={{
      display: 'flex', gap: 'var(--sp-8)', flexWrap: 'wrap',
      alignItems: 'flex-start', justifyContent: 'center', ...style,
    }} {...rest}>
      {shots.map((s, i) => (
        <PhoneShot
          key={s} shot={s} width={width} caption={captions[i]} assetBase={assetBase}
          style={{ marginTop: stagger && i % 2 === 1 ? 'var(--sp-10)' : 0, alignItems: 'flex-start' }}
        />
      ))}
    </div>
  );
}
