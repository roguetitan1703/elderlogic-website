(function(){const NS="ElderLogicDesignSystem_cac832";window[NS]=window[NS]||{};const React=window.React;


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
function Logo({ variant = 'full', height, assetBase = '', className, style, ...rest }) {
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



/** Quiet inline "keep reading" link. The arrow slides 3px on hover — the only motion in the system. */
function ArrowLink({ children, tone = 'default', href = '#', style, ...rest }) {
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
function Button({ variant = 'primary', size = 'md', as = 'button', full = false, disabled = false, children, style, ...rest }) {
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



/** Hairline-bordered surface. Shadow only appears when `interactive` and hovered. */
function Card({ children, padding = 'md', tone = 'default', interactive = false, as = 'div', style, ...rest }) {
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



/** Small uppercase label above a heading. Mirrors the deck's "UPDATED MONTHLY" kickers. */
function Eyebrow({ children, tone = 'brand', rule = false, style, ...rest }) {
  const color = tone === 'onDark' ? 'var(--navy-200)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--green-700)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', ...style }} {...rest}>
      {rule && <span aria-hidden="true" style={{ width: 24, height: 2, background: tone === 'onDark' ? 'var(--green-400)' : 'var(--green-500)' }} />}
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color, lineHeight: 1.4,
      }}>{children}</span>
    </div>
  );
}



/** A capability: uppercase label + one explanatory sentence, hung off a green rule. */
function FeatureItem({ label, children, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)',
      borderLeft: '3px solid ' + (dark ? 'var(--green-400)' : 'var(--green-500)'),
      paddingLeft: 'var(--sp-4)', ...style,
    }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
        color: dark ? 'var(--n-0)' : 'var(--navy-700)',
      }}>{label}</span>
      <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: dark ? 'var(--navy-200)' : 'var(--text-body)' }}>{children}</p>
    </div>
  );
}



/** A quoted line from the field, set in the display serif. Attribution is required. */
function PullQuote({ children, attribution, role, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)', maxWidth: '34ch', ...style }} {...rest}>
      <span aria-hidden="true" style={{ width: 32, height: 3, background: dark ? 'var(--green-400)' : 'var(--green-500)' }} />
      <blockquote style={{
        margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-3)',
        lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-display)',
        color: dark ? 'var(--n-0)' : 'var(--text-strong)',
      }}>{children}</blockquote>
      {attribution && <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: dark ? 'var(--navy-200)' : 'var(--text-muted)' }}>
        {attribution}{role ? ' · ' + role : ''}
      </figcaption>}
    </figure>
  );
}




const HEADING_SIZES = { xl: 'var(--fs-display-2)', lg: 'var(--fs-display-3)', md: 'var(--fs-h1)' };

/** Eyebrow + serif headline + optional lead paragraph. The standard opener for every section. */
function SectionHeading({ eyebrow, title, lead, size = 'lg', align = 'left', tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: 'var(--measure)', ...style,
    }} {...rest}>
      {eyebrow && <Eyebrow tone={dark ? 'onDark' : 'brand'}>{eyebrow}</Eyebrow>}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: HEADING_SIZES[size], lineHeight: 'var(--lh-snug)',
        letterSpacing: 'var(--ls-display)', fontWeight: 'var(--fw-semibold)',
        color: dark ? 'var(--n-0)' : 'var(--text-strong)', margin: 0,
      }}>{title}</h2>
      {lead && <p style={{
        fontSize: 'var(--fs-lead)', lineHeight: 'var(--lh-body)', maxWidth: 'var(--measure-narrow)',
        color: dark ? 'var(--navy-200)' : 'var(--text-body)',
      }}>{lead}</p>}
    </div>
  );
}



/** One large number with its subject underneath — e.g. "2,621 Arizona senior living & care facilities". */
function StatBlock({ value, label, note, tone = 'default', size = 'lg', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
        fontSize: size === 'lg' ? 'var(--fs-stat)' : 'var(--fs-display-3)',
        lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-display)',
        color: dark ? 'var(--n-0)' : 'var(--navy-700)', fontVariantNumeric: 'tabular-nums',
      }}>{value}</span>
      <span style={{
        fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-snug)', maxWidth: '22ch',
        color: dark ? 'var(--navy-200)' : 'var(--text-body)',
      }}>{label}</span>
      {note && <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', letterSpacing: 'var(--ls-mono)',
        color: dark ? 'var(--green-300)' : 'var(--green-700)',
      }}>{note}</span>}
    </div>
  );
}



const DESKTOP_SHOTS = {
  map: { src: 'assets/product/desk-map.png', alt: 'ElderLogic map of Arizona senior living communities' },
  clients: { src: 'assets/product/desk-clients.png', alt: 'ElderLogic client list' },
};

/** A supplied desktop product screenshot in its monitor. Use sparingly — the phone leads. */
function DesktopShot({ shot = 'map', width = 720, caption, assetBase = '', style, ...rest }) {
  const s = DESKTOP_SHOTS[shot];
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', ...style }} {...rest}>
      <img src={base + s.src} alt={s.alt} style={{ width, height: 'auto', filter: 'drop-shadow(0 28px 56px rgba(11,26,48,.18))' }} />
      {caption && <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{caption}</figcaption>}
    </figure>
  );
}



/** CSS phone bezel for live HTML mockups (not screenshots). 375x812 content area by default. */
function PhoneFrame({ children, width = 320, tone = 'dark', statusBar = true, style, ...rest }) {
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




/** Three phone screens shown together at equal weight, staggered on wide viewports. */
function PhoneRow({ shots = ['assessment', 'visit-form', 'route'], captions = [], width = 300, stagger = true, assetBase = '', style, ...rest }) {
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



const PHONE_SHOTS = {
  assessment: { src: 'assets/product/phone-assessment.png', alt: 'ElderLogic client assessment form on a phone' },
  'visit-form': { src: 'assets/product/phone-visit-form.png', alt: 'ElderLogic marketing visit form on a phone' },
  route: { src: 'assets/product/phone-route.png', alt: 'ElderLogic optimised pre-tour route on a phone' },
};

/**
 * A real product phone screenshot presented at full weight — the primary way ElderLogic
 * shows the product, because liaisons work from a phone.
 */
function PhoneShot({ shot = 'route', width = 320, caption, assetBase = '', style, ...rest }) {
  const s = PHONE_SHOTS[shot];
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', alignItems: 'flex-start', ...style }} {...rest}>
      <img src={base + s.src} alt={s.alt} style={{ width, height: 'auto', filter: 'drop-shadow(0 24px 48px rgba(11,26,48,.22))' }} />
      {caption && <figcaption style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', maxWidth: width }}>{caption}</figcaption>}
    </figure>
  );
}



/** Included-items list. The tick is a hairline green check, never a filled badge. */
function CheckList({ items = [], tone = 'default', dense = false, style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: dense ? 'var(--sp-2)' : 'var(--sp-3)', ...style }} {...rest}>
      {items.map((it) => (
        <li key={it} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 'var(--sp-3)', alignItems: 'start' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ marginTop: 4 }}>
            <path d="M3 8.5l3.2 3.2L13 5" fill="none" stroke={dark ? 'var(--green-300)' : 'var(--green-600)'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: dark ? 'var(--navy-200)' : 'var(--text-body)' }}>{it}</span>
        </li>
      ))}
    </ul>
  );
}




/** A plan or add-on: price, cadence, what it is, what it includes. */
function PriceCard({ name, price, cadence = '/month', addon, description, items = [], footnote, emphasis = false, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)',
      background: emphasis ? 'var(--navy-800)' : 'var(--surface-card)',
      border: '1px solid ' + (emphasis ? 'var(--navy-800)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-card)', padding: 'var(--sp-8)', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
          letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
          color: emphasis ? 'var(--green-300)' : 'var(--green-700)',
        }}>{name}</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-2)', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-3)', fontWeight: 'var(--fw-semibold)',
            letterSpacing: 'var(--ls-display)', color: emphasis ? 'var(--n-0)' : 'var(--navy-700)',
            fontVariantNumeric: 'tabular-nums',
          }}>{price}</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: emphasis ? 'var(--navy-200)' : 'var(--text-muted)' }}>{cadence}</span>
        </div>
        {addon && <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)',
          color: emphasis ? 'var(--navy-200)' : 'var(--text-body)',
        }}>{addon}</span>}
      </div>
      {description && <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: emphasis ? 'var(--navy-200)' : 'var(--text-body)' }}>{description}</p>}
      {items.length > 0 && <CheckList items={items} tone={emphasis ? 'onDark' : 'default'} />}
      {footnote && <span style={{ fontSize: 'var(--fs-caption)', color: emphasis ? 'var(--navy-300)' : 'var(--text-muted)', marginTop: 'auto' }}>{footnote}</span>}
    </div>
  );
}



/** Label + control + help/error. 44px minimum control height, because reps fill these in the car. */
function Field({ label, hint, error, required = false, htmlFor, children, style, ...rest }) {
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



/** Native select styled to match TextInput, with the app's "-Select-" empty state. */
function SelectInput({ options = [], placeholder = '-Select-', invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: 'relative', ...style }}>
      <select
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', minHeight: 44, padding: '11px 38px 11px 13px', appearance: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--navy-800)',
          background: 'var(--n-0)', borderRadius: 'var(--radius-control)',
          border: '1px solid ' + (invalid ? 'var(--feedback-error)' : focus ? 'var(--green-600)' : 'var(--border-default)'),
          boxShadow: focus && !invalid ? 'var(--shadow-focus)' : 'none',
          outline: 'none', transition: 'var(--transition-control)',
        }}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ position: 'absolute', right: 13, top: '50%', marginTop: -7, pointerEvents: 'none' }}>
        <path d="M3 5.5L7 9.5l4-4" fill="none" stroke="var(--n-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}



/** Single-line text control. Focus is a green ring; error is a brick border. */
function TextInput({ invalid = false, multiline = false, rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <Tag
      rows={multiline ? rows : undefined}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        width: '100%', minHeight: multiline ? undefined : 44, padding: '11px 13px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--navy-800)',
        background: 'var(--n-0)', borderRadius: 'var(--radius-control)',
        border: '1px solid ' + (invalid ? 'var(--feedback-error)' : focus ? 'var(--green-600)' : 'var(--border-default)'),
        boxShadow: focus && !invalid ? 'var(--shadow-focus)' : 'none',
        outline: 'none', transition: 'var(--transition-control)', resize: multiline ? 'vertical' : undefined,
        ...style,
      }}
      {...rest}
    />
  );
}



/**
 * Published state-record fields as label/value rows. Values are shown verbatim in mono —
 * no scores, no ranks, no colour-coded status. See readme.md → "The no-rating rule".
 */
function RecordList({ rows = [], columns = 1, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <dl style={{
      margin: 0, display: 'grid', gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      borderTop: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-hairline)'), ...style,
    }} {...rest}>
      {rows.map((r) => (
        <div key={r.label} style={{
          display: 'flex', justifyContent: 'space-between', gap: 'var(--sp-4)',
          padding: 'var(--sp-3) 0',
          borderBottom: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-hairline)'),
        }}>
          <dt style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)', color: dark ? 'var(--navy-200)' : 'var(--text-muted)' }}>{r.label}</dt>
          <dd style={{
            margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-body-sm)',
            letterSpacing: 'var(--ls-mono)', fontVariantNumeric: 'tabular-nums', textAlign: 'right',
            color: dark ? 'var(--n-0)' : 'var(--navy-800)',
          }}>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}



/** Provenance line. Every published figure on the site carries one. */
function SourceNote({ children, tone = 'default', style, ...rest }) {
  const dark = tone === 'onDark';
  return (
    <p style={{
      display: 'flex', alignItems: 'center', gap: 'var(--sp-2)',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', letterSpacing: 'var(--ls-mono)',
      color: dark ? 'var(--navy-300)' : 'var(--text-muted)', ...style,
    }} {...rest}>
      <span aria-hidden="true" style={{ width: 12, height: 1, background: dark ? 'var(--navy-300)' : 'var(--n-300)', flex: '0 0 auto' }} />
      {children}
    </p>
  );
}




/** Site footer on navy, with the real contact details from the brand material. */
function SiteFooter({ columns = [], assetBase = '', style, ...rest }) {
  return (
    <footer style={{ background: 'var(--surface-dark)', color: 'var(--navy-200)', ...style }} {...rest}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'var(--sp-16) var(--gutter) var(--sp-10)',
        display: 'grid', gap: 'var(--sp-10)', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
          <Logo variant="full-white" height={44} assetBase={assetBase} />
          <div style={{ display: 'grid', gap: 'var(--sp-1)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)' }}>
            <span>elderlogic.app</span>
            <span>hello@elderlogic.app</span>
            <span>(480) 685-5657</span>
          </div>
        </div>
        {columns.map((c) => (
          <div key={c.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)',
              letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--n-0)',
            }}>{c.title}</span>
            {c.links.map((l) => (
              <a key={l.label} href={l.href} style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--navy-200)', borderBottom: 'none' }}>{l.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--sp-5) var(--gutter)',
          display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-4)', justifyContent: 'space-between',
          fontSize: 'var(--fs-caption)', color: 'var(--navy-300)',
        }}>
          <span>&copy; 2026 ElderLogic. Arizona.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>Facility data published by AZDHS · refreshed monthly</span>
        </div>
      </div>
    </footer>
  );
}





/** Marketing site header. Sticky, hairline bottom border, phone-first: nav collapses to a sheet. */
function SiteHeader({ links = [], active, onNavigate, cta = 'Request a walkthrough', onCta, assetBase = '', style, ...rest }) {
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

Object.assign(window[NS],{Logo,ArrowLink,Button,Card,Eyebrow,FeatureItem,PullQuote,SectionHeading,StatBlock,DesktopShot,PhoneFrame,PhoneRow,PhoneShot,CheckList,PriceCard,Field,SelectInput,TextInput,RecordList,SourceNote,SiteFooter,SiteHeader});})();