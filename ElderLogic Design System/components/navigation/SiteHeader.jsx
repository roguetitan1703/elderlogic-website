import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Button } from '../actions/Button.jsx';

/** Marketing site header. Sticky, hairline bottom border, phone-first: nav collapses to a sheet. */
export function SiteHeader({ links = [], active, onNavigate, cta = 'Request a walkthrough', onCta, assetBase = '', style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const go = (href) => { setOpen(false); onNavigate && onNavigate(href); };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,.92)',
      backdropFilter: 'var(--blur-panel)', WebkitBackdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-hairline)', ...style,
    }} {...rest}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)',
        minHeight: 'var(--header-h)', display: 'flex', alignItems: 'center', gap: 'var(--sp-6)',
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go('/'); }} style={{ borderBottom: 'none', flex: '0 0 auto' }} aria-label="ElderLogic home">
          <Logo variant="full" height={40} assetBase={assetBase} />
        </a>
        <nav style={{ display: 'none', gap: 'var(--sp-6)', marginLeft: 'auto' }} className="el-nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
                fontWeight: active === l.href ? 'var(--fw-semibold)' : 'var(--fw-text)',
                color: active === l.href ? 'var(--navy-800)' : 'var(--text-body)',
                borderBottom: 'none', paddingBottom: 2,
                boxShadow: active === l.href ? 'inset 0 -2px 0 var(--green-500)' : 'none',
              }}>{l.label}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
          <div className="el-cta-desktop" style={{ display: 'none' }}>
            <Button size="sm" onClick={onCta}>{cta}</Button>
          </div>
          <button className="el-burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
            style={{
              width: 44, height: 44, display: 'grid', placeItems: 'center', background: 'transparent',
              border: '1px solid var(--border-default)', borderRadius: 'var(--radius-control)', cursor: 'pointer',
            }}>
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
              {(open ? [] : [1, 7, 13]).map((y) => <line key={y} x1="0" y1={y} x2="18" y2={y} stroke="var(--navy-700)" strokeWidth="1.75" strokeLinecap="round" />)}
              {open && <g stroke="var(--navy-700)" strokeWidth="1.75" strokeLinecap="round"><line x1="1" y1="1" x2="17" y2="13" /><line x1="17" y1="1" x2="1" y2="13" /></g>}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div style={{ borderTop: '1px solid var(--border-hairline)', background: 'var(--n-0)', padding: 'var(--sp-4) var(--gutter) var(--sp-6)' }}>
          <nav style={{ display: 'grid', gap: 'var(--sp-1)' }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-medium)',
                  color: 'var(--navy-800)', borderBottom: 'none', padding: 'var(--sp-3) 0',
                }}>{l.label}</a>
            ))}
          </nav>
          <Button full style={{ marginTop: 'var(--sp-4)' }} onClick={onCta}>{cta}</Button>
        </div>
      )}
      <style>{'@media(min-width:900px){.el-nav-desktop{display:flex!important}.el-cta-desktop{display:block!important}.el-burger{display:none!important}}'}</style>
    </header>
  );
}
