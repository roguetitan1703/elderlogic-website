/* @ds-bundle: {"format":4,"namespace":"ElderLogicDesignSystem_cac832","components":[{"name":"ArrowLink","sourcePath":"components/actions/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CheckList","sourcePath":"components/commerce/CheckList.jsx"},{"name":"PriceCard","sourcePath":"components/commerce/PriceCard.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"FeatureItem","sourcePath":"components/content/FeatureItem.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"RecordList","sourcePath":"components/data/RecordList.jsx"},{"name":"SourceNote","sourcePath":"components/data/SourceNote.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"SelectInput","sourcePath":"components/forms/SelectInput.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"DesktopShot","sourcePath":"components/product/DesktopShot.jsx"},{"name":"PhoneFrame","sourcePath":"components/product/PhoneFrame.jsx"},{"name":"PhoneRow","sourcePath":"components/product/PhoneRow.jsx"},{"name":"PhoneShot","sourcePath":"components/product/PhoneShot.jsx"}],"sourceHashes":{"components/actions/ArrowLink.jsx":"58d96c2b03df","components/actions/Button.jsx":"18dfc28b169e","components/brand/Logo.jsx":"91681bac37e7","components/commerce/CheckList.jsx":"0431d4285365","components/commerce/PriceCard.jsx":"33b130a9c7e6","components/content/Card.jsx":"3979e24bae6d","components/content/Eyebrow.jsx":"ceb5b4a1c86d","components/content/FeatureItem.jsx":"4a7b003695c0","components/content/PullQuote.jsx":"8cfce7de8728","components/content/SectionHeading.jsx":"f3fbf44157bf","components/content/StatBlock.jsx":"e70d9290b7ff","components/data/RecordList.jsx":"b3522cf0eb99","components/data/SourceNote.jsx":"73439122524b","components/forms/Field.jsx":"fc21867c2d18","components/forms/SelectInput.jsx":"0c6b65e48666","components/forms/TextInput.jsx":"a40ff8b0e7a0","components/navigation/SiteFooter.jsx":"d91799917a0c","components/navigation/SiteHeader.jsx":"f250b67781e2","components/product/DesktopShot.jsx":"afc14cf74fe0","components/product/PhoneFrame.jsx":"c9f2d39cee87","components/product/PhoneRow.jsx":"5ac25c265f2c","components/product/PhoneShot.jsx":"b65474ca58c3","ui_kits/marketing-site/ConciergeScreen.jsx":"60a69e209301","ui_kits/marketing-site/ContactScreen.jsx":"adde0fa672f7","ui_kits/marketing-site/HomeScreen.jsx":"e17de0c01e4f","ui_kits/marketing-site/PlatformScreen.jsx":"b7b7b51b64a6","ui_kits/marketing-site/PricingScreen.jsx":"7c056b2c1059"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElderLogicDesignSystem_cac832 = window.ElderLogicDesignSystem_cac832 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Quiet inline "keep reading" link. The arrow slides 3px on hover — the only motion in the system. */
function ArrowLink({
  children,
  tone = 'default',
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'onDark' ? 'var(--n-0)' : 'var(--green-700)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color,
      textDecoration: 'none',
      borderBottom: 'none',
      opacity: hover && tone === 'onDark' ? 0.8 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    },
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BUTTON_SIZES = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--fs-caption)'
  },
  md: {
    padding: '12px 20px',
    fontSize: 'var(--fs-body-sm)'
  },
  lg: {
    padding: '15px 26px',
    fontSize: 'var(--fs-body)'
  }
};
const BUTTON_VARIANTS = {
  primary: {
    background: 'var(--green-600)',
    color: 'var(--n-0)',
    border: '1px solid var(--green-600)'
  },
  secondary: {
    background: 'var(--n-0)',
    color: 'var(--navy-700)',
    border: '1px solid var(--border-default)'
  },
  quiet: {
    background: 'transparent',
    color: 'var(--navy-700)',
    border: '1px solid transparent'
  },
  onDark: {
    background: 'var(--n-0)',
    color: 'var(--navy-800)',
    border: '1px solid var(--n-0)'
  },
  onDarkGhost: {
    background: 'transparent',
    color: 'var(--n-0)',
    border: '1px solid var(--border-dark)'
  }
};
const BUTTON_HOVER = {
  primary: {
    background: 'var(--green-700)',
    borderColor: 'var(--green-700)'
  },
  secondary: {
    background: 'var(--n-50)',
    borderColor: 'var(--border-strong)'
  },
  quiet: {
    background: 'var(--n-50)'
  },
  onDark: {
    background: 'var(--navy-50)',
    borderColor: 'var(--navy-50)'
  },
  onDarkGhost: {
    background: 'rgba(255,255,255,.08)',
    borderColor: 'rgba(255,255,255,.28)'
  }
};

/** Primary action control. One primary per view; everything else is secondary or quiet. */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  full = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LOGO_SRC = {
  full: 'assets/logo.svg',
  'full-white': 'assets/logo-white.svg',
  'full-black': 'assets/logo-black.svg',
  mark: 'assets/favicon-512.svg'
};

/**
 * The ElderLogic lockup. Always the supplied SVG — never retyped, never recoloured
 * beyond the three provided files.
 */
function Logo({
  variant = 'full',
  height,
  assetBase = '',
  className,
  style,
  ...rest
}) {
  const isMark = variant === 'mark';
  const h = height || (isMark ? 32 : 44);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: (assetBase ? assetBase.replace(/\/$/, '') + '/' : '') + LOGO_SRC[variant],
    alt: "ElderLogic \u2014 Smarter Placement, Better Outcomes",
    className: className,
    style: {
      height: h,
      width: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CheckList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Included-items list. The tick is a hairline green check, never a filled badge. */
function CheckList({
  items = [],
  tone = 'default',
  dense = false,
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: dense ? 'var(--sp-2)' : 'var(--sp-3)',
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'grid',
      gridTemplateColumns: '16px 1fr',
      gap: 'var(--sp-3)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.2 3.2L13 5",
    fill: "none",
    stroke: dark ? 'var(--green-300)' : 'var(--green-600)',
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: dark ? 'var(--navy-200)' : 'var(--text-body)'
    }
  }, it))));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A plan or add-on: price, cadence, what it is, what it includes. */
function PriceCard({
  name,
  price,
  cadence = '/month',
  addon,
  description,
  items = [],
  footnote,
  emphasis = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      background: emphasis ? 'var(--navy-800)' : 'var(--surface-card)',
      border: '1px solid ' + (emphasis ? 'var(--navy-800)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-card)',
      padding: 'var(--sp-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: emphasis ? 'var(--green-300)' : 'var(--green-700)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-display)',
      color: emphasis ? 'var(--n-0)' : 'var(--navy-700)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: emphasis ? 'var(--navy-200)' : 'var(--text-muted)'
    }
  }, cadence)), addon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      color: emphasis ? 'var(--navy-200)' : 'var(--text-body)'
    }
  }, addon)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: emphasis ? 'var(--navy-200)' : 'var(--text-body)'
    }
  }, description), items.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.CheckList, {
    items: items,
    tone: emphasis ? 'onDark' : 'default'
  }), footnote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: emphasis ? 'var(--navy-300)' : 'var(--text-muted)',
      marginTop: 'auto'
    }
  }, footnote));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline-bordered surface. Shadow only appears when `interactive` and hovered. */
function Card({
  children,
  padding = 'md',
  tone = 'default',
  interactive = false,
  as = 'div',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const pads = {
    none: 0,
    sm: 'var(--sp-4)',
    md: 'var(--sp-6)',
    lg: 'var(--sp-8)'
  };
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)'
    },
    inset: {
      background: 'var(--surface-inset)',
      border: '1px solid var(--border-hairline)'
    },
    paper: {
      background: 'var(--surface-paper)',
      border: '1px solid var(--paper-200)'
    },
    onDark: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid var(--border-dark)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding: pads[padding],
      boxShadow: interactive && hover ? 'var(--shadow-2)' : 'var(--shadow-none)',
      transition: 'var(--transition-control)',
      textDecoration: 'none',
      ...tones[tone],
      ...(interactive && hover ? {
        borderColor: 'var(--border-default)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small uppercase label above a heading. Mirrors the deck's "UPDATED MONTHLY" kickers. */
function Eyebrow({
  children,
  tone = 'brand',
  rule = false,
  style,
  ...rest
}) {
  const color = tone === 'onDark' ? 'var(--navy-200)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--green-700)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 24,
      height: 2,
      background: tone === 'onDark' ? 'var(--green-400)' : 'var(--green-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      lineHeight: 1.4
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A capability: uppercase label + one explanatory sentence, hung off a green rule. */
function FeatureItem({
  label,
  children,
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      borderLeft: '3px solid ' + (dark ? 'var(--green-400)' : 'var(--green-500)'),
      paddingLeft: 'var(--sp-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--n-0)' : 'var(--navy-700)'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: dark ? 'var(--navy-200)' : 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A quoted line from the field, set in the display serif. Attribution is required. */
function PullQuote({
  children,
  attribution,
  role,
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      maxWidth: '34ch',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 32,
      height: 3,
      background: dark ? 'var(--green-400)' : 'var(--green-500)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-3)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-display)',
      color: dark ? 'var(--n-0)' : 'var(--text-strong)'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: dark ? 'var(--navy-200)' : 'var(--text-muted)'
    }
  }, attribution, role ? ' · ' + role : ''));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEADING_SIZES = {
  xl: 'var(--fs-display-2)',
  lg: 'var(--fs-display-3)',
  md: 'var(--fs-h1)'
};

/** Eyebrow + serif headline + optional lead paragraph. The standard opener for every section. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  size = 'lg',
  align = 'left',
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: 'var(--measure)',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'onDark' : 'brand'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: HEADING_SIZES[size],
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-display)',
      fontWeight: 'var(--fw-semibold)',
      color: dark ? 'var(--n-0)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 'var(--measure-narrow)',
      color: dark ? 'var(--navy-200)' : 'var(--text-body)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One large number with its subject underneath — e.g. "2,621 Arizona senior living & care facilities". */
function StatBlock({
  value,
  label,
  note,
  tone = 'default',
  size = 'lg',
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size === 'lg' ? 'var(--fs-stat)' : 'var(--fs-display-3)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-display)',
      color: dark ? 'var(--n-0)' : 'var(--navy-700)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-snug)',
      maxWidth: '22ch',
      color: dark ? 'var(--navy-200)' : 'var(--text-body)'
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-mono)',
      color: dark ? 'var(--green-300)' : 'var(--green-700)'
    }
  }, note));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/RecordList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Published state-record fields as label/value rows. Values are shown verbatim in mono —
 * no scores, no ranks, no colour-coded status. See readme.md → "The no-rating rule".
 */
function RecordList({
  rows = [],
  columns = 1,
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      borderTop: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-hairline)'),
      ...style
    }
  }, rest), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-3) 0',
      borderBottom: '1px solid ' + (dark ? 'var(--border-dark)' : 'var(--border-hairline)')
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: dark ? 'var(--navy-200)' : 'var(--text-muted)'
    }
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body-sm)',
      letterSpacing: 'var(--ls-mono)',
      fontVariantNumeric: 'tabular-nums',
      textAlign: 'right',
      color: dark ? 'var(--n-0)' : 'var(--navy-800)'
    }
  }, r.value))));
}
Object.assign(__ds_scope, { RecordList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RecordList.jsx", error: String((e && e.message) || e) }); }

// components/data/SourceNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Provenance line. Every published figure on the site carries one. */
function SourceNote({
  children,
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-mono)',
      color: dark ? 'var(--navy-300)' : 'var(--text-muted)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 12,
      height: 1,
      background: dark ? 'var(--navy-300)' : 'var(--n-300)',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { SourceNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SourceNote.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + control + help/error. 44px minimum control height, because reps fill these in the car. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--navy-800)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)'
    },
    "aria-hidden": "true"
  }, " *")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--feedback-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match TextInput, with the app's "-Select-" empty state. */
function SelectInput({
  options = [],
  placeholder = '-Select-',
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      minHeight: 44,
      padding: '11px 38px 11px 13px',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--navy-800)',
      background: 'var(--n-0)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid ' + (invalid ? 'var(--feedback-error)' : focus ? 'var(--green-600)' : 'var(--border-default)'),
      boxShadow: focus && !invalid ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 13,
      top: '50%',
      marginTop: -7,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5.5L7 9.5l4-4",
    fill: "none",
    stroke: "var(--n-500)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { SelectInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text control. Focus is a green ring; error is a brick border. */
function TextInput({
  invalid = false,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      minHeight: multiline ? undefined : 44,
      padding: '11px 13px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--navy-800)',
      background: 'var(--n-0)',
      borderRadius: 'var(--radius-control)',
      border: '1px solid ' + (invalid ? 'var(--feedback-error)' : focus ? 'var(--green-600)' : 'var(--border-default)'),
      boxShadow: focus && !invalid ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)',
      resize: multiline ? 'vertical' : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Site footer on navy, with the real contact details from the brand material. */
function SiteFooter({
  columns = [],
  assetBase = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--navy-200)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sp-16) var(--gutter) var(--sp-10)',
      display: 'grid',
      gap: 'var(--sp-10)',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "full-white",
    height: 44,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-1)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "elderlogic.app"), /*#__PURE__*/React.createElement("span", null, "hello@elderlogic.app"), /*#__PURE__*/React.createElement("span", null, "(480) 685-5657"))), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--n-0)'
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--navy-200)',
      borderBottom: 'none'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--sp-5) var(--gutter)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-4)',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-caption)',
      color: 'var(--navy-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ElderLogic. Arizona."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "Facility data published by AZDHS \xB7 refreshed monthly"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Marketing site header. Sticky, hairline bottom border, phone-first: nav collapses to a sheet. */
function SiteHeader({
  links = [],
  active,
  onNavigate,
  cta = 'Request a walkthrough',
  onCta,
  assetBase = '',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const go = href => {
    setOpen(false);
    onNavigate && onNavigate(href);
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'var(--blur-panel)',
      WebkitBackdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      minHeight: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('/');
    },
    style: {
      borderBottom: 'none',
      flex: '0 0 auto'
    },
    "aria-label": "ElderLogic home"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "full",
    height: 40,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'none',
      gap: 'var(--sp-6)',
      marginLeft: 'auto'
    },
    className: "el-nav-desktop"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: e => {
      e.preventDefault();
      go(l.href);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: active === l.href ? 'var(--fw-semibold)' : 'var(--fw-text)',
      color: active === l.href ? 'var(--navy-800)' : 'var(--text-body)',
      borderBottom: 'none',
      paddingBottom: 2,
      boxShadow: active === l.href ? 'inset 0 -2px 0 var(--green-500)' : 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-cta-desktop",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, cta)), /*#__PURE__*/React.createElement("button", {
    className: "el-burger",
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    "aria-expanded": open,
    style: {
      width: 44,
      height: 44,
      display: 'grid',
      placeItems: 'center',
      background: 'transparent',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    "aria-hidden": "true"
  }, (open ? [] : [1, 7, 13]).map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    y1: y,
    x2: "18",
    y2: y,
    stroke: "var(--navy-700)",
    strokeWidth: "1.75",
    strokeLinecap: "round"
  })), open && /*#__PURE__*/React.createElement("g", {
    stroke: "var(--navy-700)",
    strokeWidth: "1.75",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "17",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "1",
    x2: "1",
    y2: "13"
  })))))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--n-0)',
      padding: 'var(--sp-4) var(--gutter) var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      gap: 'var(--sp-1)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: e => {
      e.preventDefault();
      go(l.href);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--navy-800)',
      borderBottom: 'none',
      padding: 'var(--sp-3) 0'
    }
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    full: true,
    style: {
      marginTop: 'var(--sp-4)'
    },
    onClick: onCta
  }, cta)), /*#__PURE__*/React.createElement("style", null, '@media(min-width:900px){.el-nav-desktop{display:flex!important}.el-cta-desktop{display:block!important}.el-burger{display:none!important}}'));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/product/DesktopShot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DESKTOP_SHOTS = {
  map: {
    src: 'assets/product/desk-map.png',
    alt: 'ElderLogic map of Arizona senior living communities'
  },
  clients: {
    src: 'assets/product/desk-clients.png',
    alt: 'ElderLogic client list'
  }
};

/** A supplied desktop product screenshot in its monitor. Use sparingly — the phone leads. */
function DesktopShot({
  shot = 'map',
  width = 720,
  caption,
  assetBase = '',
  style,
  ...rest
}) {
  const s = DESKTOP_SHOTS[shot];
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: base + s.src,
    alt: s.alt,
    style: {
      width,
      height: 'auto',
      filter: 'drop-shadow(0 28px 56px rgba(11,26,48,.18))'
    }
  }), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { DesktopShot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/DesktopShot.jsx", error: String((e && e.message) || e) }); }

// components/product/PhoneFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** CSS phone bezel for live HTML mockups (not screenshots). 375x812 content area by default. */
function PhoneFrame({
  children,
  width = 320,
  tone = 'dark',
  statusBar = true,
  style,
  ...rest
}) {
  const scale = width / 375;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height: 812 * scale,
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-device)',
      background: tone === 'dark' ? 'var(--navy-900)' : 'var(--n-800)',
      padding: 10 * Math.max(scale, .7),
      boxShadow: 'var(--shadow-device)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'calc(var(--radius-device) - 8px)',
      overflow: 'hidden',
      background: 'var(--n-0)',
      position: 'relative'
    }
  }, statusBar && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--sp-5)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--navy-800)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 8,
      border: '1px solid var(--navy-800)',
      borderRadius: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: statusBar ? 34 : 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto'
    }
  }, children))));
}
Object.assign(__ds_scope, { PhoneFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// components/product/PhoneShot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PHONE_SHOTS = {
  assessment: {
    src: 'assets/product/phone-assessment.png',
    alt: 'ElderLogic client assessment form on a phone'
  },
  'visit-form': {
    src: 'assets/product/phone-visit-form.png',
    alt: 'ElderLogic marketing visit form on a phone'
  },
  route: {
    src: 'assets/product/phone-route.png',
    alt: 'ElderLogic optimised pre-tour route on a phone'
  }
};

/**
 * A real product phone screenshot presented at full weight — the primary way ElderLogic
 * shows the product, because liaisons work from a phone.
 */
function PhoneShot({
  shot = 'route',
  width = 320,
  caption,
  assetBase = '',
  style,
  ...rest
}) {
  const s = PHONE_SHOTS[shot];
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      alignItems: 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: base + s.src,
    alt: s.alt,
    style: {
      width,
      height: 'auto',
      filter: 'drop-shadow(0 24px 48px rgba(11,26,48,.22))'
    }
  }), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      maxWidth: width
    }
  }, caption));
}
Object.assign(__ds_scope, { PhoneShot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PhoneShot.jsx", error: String((e && e.message) || e) }); }

// components/product/PhoneRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Three phone screens shown together at equal weight, staggered on wide viewports. */
function PhoneRow({
  shots = ['assessment', 'visit-form', 'route'],
  captions = [],
  width = 300,
  stagger = true,
  assetBase = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--sp-8)',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center',
      ...style
    }
  }, rest), shots.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.PhoneShot, {
    key: s,
    shot: s,
    width: width,
    caption: captions[i],
    assetBase: assetBase,
    style: {
      marginTop: stagger && i % 2 === 1 ? 'var(--sp-10)' : 0,
      alignItems: 'flex-start'
    }
  })));
}
Object.assign(__ds_scope, { PhoneRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PhoneRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ConciergeScreen.jsx
try { (() => {
const {
  SectionHeading,
  FeatureItem,
  Card,
  PullQuote,
  Button,
  ArrowLink,
  PhoneShot,
  Eyebrow
} = window.ElderLogicDesignSystem_cac832;
const STEPS = [{
  n: '01',
  label: 'Your rep picks the day',
  body: 'Date, time and the area they want to work — their territory, their schedule.'
}, {
  n: '02',
  label: 'We call the neighbourhood',
  body: 'ElderLogic contacts the licensed communities within a mile of the anchor address with your placement value proposition.'
}, {
  n: '03',
  label: 'We build the route',
  body: 'Only the homes that said they want the meeting go on the route, ordered for driving.'
}, {
  n: '04',
  label: 'Your rep walks in expected',
  body: 'With a reason to connect: your hospice places its own residents, so the home pays no placement-agent fee.'
}];
function ConciergeScreen({
  go,
  base
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "el-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "ElderLogic Concierge"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-2)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '22ch'
    }
  }, "Plan the day. Work the territory. Build the relationships."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-body)',
      maxWidth: '46ch'
    }
  }, "Your team controls their schedule and territory. ElderLogic Concierge handles the outreach and the route planning, so reps arrive at communities already interested in meeting them."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('/contact')
  }, "Request a walkthrough")), /*#__PURE__*/React.createElement(PhoneShot, {
    shot: "visit-form",
    width: 300,
    assetBase: base,
    style: {
      justifySelf: 'center'
    }
  }))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-12)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "onDark",
    eyebrow: "How a marketing day gets built",
    title: "Four steps, none of them cold."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-8)',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))'
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--green-300)'
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      color: 'var(--n-0)'
    }
  }, s.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--navy-200)'
    }
  }, s.body)))))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-two-col"
  }, /*#__PURE__*/React.createElement(PullQuote, {
    attribution: "What we tell the community",
    role: "on every call"
  }, "This hospice does its own placements, so you never pay a placement-agent fee."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    label: "Verified visits, if you want them"
  }, "Geofenced check-in and check-out, with completed, missed and unverified visits reported monthly."), /*#__PURE__*/React.createElement(FeatureItem, {
    label: "Outreach you can audit"
  }, "Homes identified, homes contacted, responses received, homes that met the client's criteria."), /*#__PURE__*/React.createElement(ArrowLink, {
    onClick: e => {
      e.preventDefault();
      go('/pricing');
    }
  }, "See what the add-ons cost")))), /*#__PURE__*/React.createElement(window.Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-6)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "md",
    title: "Fifteen minutes is enough to see it.",
    lead: "We will walk your team through the map, the assessment and a real route.",
    style: {
      maxWidth: '38ch'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('/contact')
  }, "Request a walkthrough"))));
}
Object.assign(window, {
  ConciergeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ConciergeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactScreen.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Field,
  TextInput,
  SelectInput,
  Button,
  CheckList,
  SourceNote
} = window.ElderLogicDesignSystem_cac832;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "el-two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Request a walkthrough",
    title: "Fifteen minutes, on your phone or a screen share.",
    lead: "Tell us who you are and we will show you the map, an assessment and a real route for your territory."
  }), /*#__PURE__*/React.createElement(CheckList, {
    items: ['We reply within one business day', 'No obligation, no placement-agent fees', 'Arizona hospice teams only, for now']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-1)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "hello@elderlogic.app"), /*#__PURE__*/React.createElement("span", null, "(480) 685-5657"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-strong)'
    }
  }, "Thank you \u2014 we have it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, "Someone from ElderLogic will reply within one business day."), /*#__PURE__*/React.createElement(SourceNote, null, "Request received \xB7 31 Aug 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-field-pair"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    required: true,
    htmlFor: "fn"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "fn",
    placeholder: "Jordan"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Last name",
    required: true,
    htmlFor: "ln"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "ln",
    placeholder: "Reyes"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Hospice or agency",
    required: true,
    htmlFor: "ag"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "ag",
    placeholder: "Sonoran Valley Hospice"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Your role",
    htmlFor: "rl"
  }, /*#__PURE__*/React.createElement(SelectInput, {
    id: "rl",
    options: ['Owner / Executive Director', 'Business Development Manager', 'Community Liaison', 'Other']
  })), /*#__PURE__*/React.createElement("div", {
    className: "el-field-pair"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    required: true,
    htmlFor: "em",
    hint: "We reply within one business day."
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "em",
    type: "email",
    placeholder: "you@hospice.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    htmlFor: "ph"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "ph",
    placeholder: "(480) 555-0123"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Territory or counties you cover",
    htmlFor: "tr"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "tr",
    multiline: true,
    rows: 3,
    placeholder: "Maricopa, Pinal \u2014 two liaisons"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    full: true
  }, "Request a walkthrough"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
const {
  SectionHeading,
  Eyebrow,
  FeatureItem,
  StatBlock,
  Card,
  PullQuote,
  Button,
  ArrowLink,
  PhoneRow,
  PhoneShot,
  DesktopShot,
  RecordList,
  SourceNote,
  CheckList
} = window.ElderLogicDesignSystem_cac832;
function Section({
  tone = 'page',
  children,
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    subtle: 'var(--surface-subtle)',
    paper: 'var(--surface-paper)',
    dark: 'var(--surface-dark)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, children));
}
function HomeScreen({
  go,
  base
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "el-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Hospice placement \xB7 Arizona"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-1)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '20ch'
    }
  }, "A shortlist of homes that will actually take your patient."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-body)',
      maxWidth: '46ch',
      color: 'var(--text-body)'
    }
  }, "ElderLogic keeps a monthly-refreshed record of every licensed senior living home in Arizona, with the licensing and inspection history the state has published. Our concierge team does the calling and the negotiating. Your team gets names, addresses and a route."), /*#__PURE__*/React.createElement("div", {
    className: "el-hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('/contact')
  }, "Request a walkthrough"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('/pricing')
  }, "See pricing")), /*#__PURE__*/React.createElement(SourceNote, null, "Data published by AZDHS \xB7 refreshed monthly")), /*#__PURE__*/React.createElement(PhoneShot, {
    shot: "route",
    width: 320,
    assetBase: base,
    style: {
      justifySelf: 'center'
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    style: {
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-10)',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    size: "md",
    value: "2,621",
    label: "Licensed Arizona senior living & care facilities",
    note: "AZDHS \xB7 refreshed monthly"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    size: "md",
    value: "Monthly",
    label: "Full refresh of licensing, inspection & enforcement history"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    size: "md",
    value: "1 mi",
    label: "Search radius around any anchor address a rep picks"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-12)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Built for the field",
    title: "Your liaisons work from a phone. So does ElderLogic.",
    lead: "Assessment, visit planning and the pre-tour route are all built for a rep sitting in a parking lot between visits \u2014 not for a desk they never sit at."
  }), /*#__PURE__*/React.createElement(PhoneRow, {
    width: 280,
    assetBase: base,
    captions: ['A client assessment with only the fields a community needs to say yes or no.', 'Reps pick their own date, time and target area. ElderLogic builds the route.', 'An optimised pre-tour route, re-optimised whenever the day changes.']
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-two-col"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What the state has published",
    title: "We don't rate homes. We show the record.",
    lead: "No stars, no scores, no rankings. ElderLogic reproduces the licensing, inspection, violation and enforcement history from the Arizona Department of Health Services, and lets your team read it."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      background: 'var(--n-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-strong)',
      marginBottom: 'var(--sp-4)'
    }
  }, "Golden Manor Assisted Living"), /*#__PURE__*/React.createElement(RecordList, {
    rows: [{
      label: 'License number',
      value: 'AL8271H'
    }, {
      label: 'License type',
      value: 'Assisted Living Home'
    }, {
      label: 'Capacity',
      value: '10 beds'
    }, {
      label: 'Last inspection',
      value: '2026-06-18'
    }, {
      label: 'Substantiated violations, 24 mo',
      value: '2'
    }, {
      label: 'Enforcement actions on file',
      value: '0'
    }]
  }), /*#__PURE__*/React.createElement(SourceNote, {
    style: {
      marginTop: 'var(--sp-4)'
    }
  }, "AZDHS licensing & enforcement file \xB7 refreshed 1 Aug 2026")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-10)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Interactive mapping",
    title: "One map instead of a contact list.",
    lead: "Search by name or address, see every licensed community around it, and let a liaison work a territory rather than a spreadsheet."
  }), /*#__PURE__*/React.createElement(DesktopShot, {
    shot: "map",
    width: 880,
    assetBase: base,
    caption: "Every licensed community in the ElderLogic database, searchable from one view."
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "onDark",
    eyebrow: "ElderLogic Concierge",
    title: "We make the calls. Your rep walks in expected.",
    lead: "Reps choose when and where they want to market. We contact the communities nearby with your placement value proposition and build the route around the homes that want the meeting."
  }), /*#__PURE__*/React.createElement(PullQuote, {
    tone: "onDark",
    attribution: "What we tell the community",
    role: "on every call"
  }, "This hospice does its own placements, so you never pay a placement-agent fee.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    tone: "onDark",
    label: "Rep-driven scheduling"
  }, "Reps choose their own date, time and target area based on their territory."), /*#__PURE__*/React.createElement(FeatureItem, {
    tone: "onDark",
    label: "Concierge outreach & routing"
  }, "We contact nearby communities and build the route around the ones interested in meeting."), /*#__PURE__*/React.createElement(FeatureItem, {
    tone: "onDark",
    label: "Warmer introductions"
  }, "Reps arrive with a reason to connect, not a cold clipboard."), /*#__PURE__*/React.createElement(ArrowLink, {
    tone: "onDark",
    onClick: e => {
      e.preventDefault();
      go('/concierge');
    }
  }, "How the concierge works")))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-two-col"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pricing",
    title: "$2,000 a month, plus $100 per user.",
    lead: "One platform subscription covers the database, the assessment workflow, outreach, mapping and routing. Two optional add-ons cover visit verification and outreach reporting."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(CheckList, {
    items: ['Comprehensive Arizona senior living database, updated monthly', 'Community contact information & historical AZDHS data', 'Client assessment & placement workflow', 'Community outreach & response collection', 'Customised client pre-tour routes']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('/pricing')
  }, "Full pricing"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('/contact')
  }, "Request a walkthrough"))))));
}
Object.assign(window, {
  HomeScreen,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PlatformScreen.jsx
try { (() => {
const {
  SectionHeading,
  FeatureItem,
  Card,
  Button,
  PhoneShot,
  DesktopShot,
  SourceNote,
  RecordList
} = window.ElderLogicDesignSystem_cac832;
function FeatureBlock({
  eyebrow,
  title,
  lead,
  items,
  media,
  flip
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'el-two-col' + (flip ? ' el-flip' : ''),
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: eyebrow,
    title: title,
    lead: lead,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-5)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement(FeatureItem, {
    key: i.label,
    label: i.label
  }, i.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, media));
}
function PlatformScreen({
  go,
  base
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "xl",
    eyebrow: "The platform",
    title: "Senior living placement, community intelligence and targeted outreach in one place.",
    lead: "2,621 Arizona senior living and care facilities. One interface, refreshed monthly, carrying the state's own licensing and enforcement record."
  }), /*#__PURE__*/React.createElement(SourceNote, {
    style: {
      marginTop: 'var(--sp-6)'
    }
  }, "Data published by AZDHS \xB7 refreshed monthly")), /*#__PURE__*/React.createElement(window.Section, {
    tone: "subtle",
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(FeatureBlock, {
    eyebrow: "Client assessment",
    title: "Capture what matters, fast.",
    lead: "A comprehensive assessment designed to get placement started quickly. Only the critical fields are required, so a community can make an initial yes-or-no call at a glance.",
    items: [{
      label: 'Easy to complete',
      body: 'Simple, step-by-step fields for efficient data entry.'
    }, {
      label: 'Built for quick responses',
      body: 'Only critical client information is required.'
    }, {
      label: 'Built-in validation',
      body: 'Reduces errors and keeps data consistent.'
    }],
    media: /*#__PURE__*/React.createElement(PhoneShot, {
      shot: "assessment",
      width: 300,
      assetBase: base
    })
  })), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement(FeatureBlock, {
    flip: true,
    eyebrow: "Client management",
    title: "Every client. One place.",
    lead: "ElderLogic keeps client information organised and accessible without the complexity of a traditional CRM \u2014 less clutter, less training, faster adoption.",
    items: [{
      label: 'Centralised client view',
      body: 'Every submitted client sits in one accessible workspace.'
    }, {
      label: 'Key details at a glance',
      body: 'Demographics, POA information and client details.'
    }, {
      label: 'Full assessment access',
      body: 'Open any client to review the complete assessment.'
    }],
    media: /*#__PURE__*/React.createElement(DesktopShot, {
      shot: "clients",
      width: 520,
      assetBase: base
    })
  })), /*#__PURE__*/React.createElement(window.Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(FeatureBlock, {
    eyebrow: "Pre-tour routing",
    title: "Every pre-tour becomes a marketing opportunity.",
    lead: "Guide the client. Evaluate the home. Turn a warm introduction into a lasting relationship.",
    items: [{
      label: 'Dynamic route optimisation',
      body: 'Re-optimise the pre-tour route at any time as plans change.'
    }, {
      label: 'Client-specific room details',
      body: "Each home's response to this client's needs, with the state's record beside it."
    }, {
      label: 'Direct AZDHS access',
      body: "Open the home's full AZDHS listing straight from the route."
    }],
    media: /*#__PURE__*/React.createElement(PhoneShot, {
      shot: "route",
      width: 300,
      assetBase: base
    })
  })), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "el-two-col"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Room details",
    title: "The home's answer, and the state's record, side by side.",
    lead: "No score is calculated from these numbers. They are shown as published, so your team can read them and decide."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(RecordList, {
    columns: 1,
    rows: [{
      label: 'Accepts hospice on site',
      value: 'Yes'
    }, {
      label: 'Room available',
      value: 'Private · ground floor'
    }, {
      label: 'Two-person assist',
      value: 'Yes'
    }, {
      label: 'Last inspection',
      value: '2026-05-02'
    }, {
      label: 'Substantiated violations, 24 mo',
      value: '0'
    }]
  }), /*#__PURE__*/React.createElement(SourceNote, {
    style: {
      marginTop: 'var(--sp-4)'
    }
  }, "Community response 2026-08-14 \xB7 AZDHS file refreshed 1 Aug 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('/contact')
  }, "Request a walkthrough"))))));
}
Object.assign(window, {
  PlatformScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PlatformScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PricingScreen.jsx
try { (() => {
const {
  SectionHeading,
  PriceCard,
  Card,
  Button,
  SourceNote,
  CheckList
} = window.ElderLogicDesignSystem_cac832;
function PricingScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "xl",
    eyebrow: "Pricing",
    title: "One subscription, two optional add-ons.",
    lead: "ElderLogic Concierge gives hospice teams the tools, data and support to simplify senior living placement and grow community relationships."
  })), /*#__PURE__*/React.createElement(window.Section, {
    tone: "subtle",
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-pricing"
  }, /*#__PURE__*/React.createElement(PriceCard, {
    emphasis: true,
    name: "ElderLogic Concierge Platform",
    price: "$2,000",
    addon: "+ $100 / user / month",
    description: "Everything a hospice placement and outreach team needs, for the whole agency.",
    items: ['Comprehensive Arizona senior living database, updated monthly', 'Community contact information & historical AZDHS data', 'Client assessment & placement workflow', 'Community search & matching', 'Community outreach & response collection', 'Customised client pre-tour routes', 'Interactive mapping & custom route creation', 'Targeted marketing visit planning & routing', 'Community details & placement information', 'Client & placement management'],
    footnote: "Billed monthly. No placement-agent fees, ever."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-6)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    name: "Monthly employee visit verification & reporting",
    price: "$500",
    description: "Verify that your team visits the communities they say they visit.",
    items: ['Compare employee activity against internal marketing goals', 'Location-verified marketing visits', 'Geofenced check-in & check-out verification', 'Completed, missed & unverified visits', 'Individual employee activity reporting', 'Monthly management reporting']
  }), /*#__PURE__*/React.createElement(PriceCard, {
    name: "Monthly placement outreach reporting",
    price: "$250",
    description: "See the full scope of outreach behind every client placement.",
    items: ['Monthly placement volume & outreach metrics', 'Homes identified across client searches', 'Homes contacted & responses received', 'Homes meeting client-specific criteria', 'Homes selected for pre-tour routes', 'Outreach response & qualification rates']
  })))), /*#__PURE__*/React.createElement(window.Section, null, /*#__PURE__*/React.createElement("div", {
    className: "el-two-col"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "md",
    eyebrow: "What is included either way",
    title: "The database is not an add-on.",
    lead: "Every subscription carries the full Arizona facility record, refreshed monthly, with the state's licensing and enforcement history attached to each home."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    tone: "paper"
  }, /*#__PURE__*/React.createElement(CheckList, {
    items: ['All 2,621 licensed Arizona senior living & care facilities', 'Validated community contact information', 'Licensing, inspection, violation & enforcement history', 'No scores, stars or rankings — the published record only']
  }), /*#__PURE__*/React.createElement(SourceNote, {
    style: {
      marginTop: 'var(--sp-4)'
    }
  }, "AZDHS licensing & enforcement file \xB7 refreshed monthly"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('/contact')
  }, "Request a walkthrough"))))));
}
Object.assign(window, {
  PricingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PricingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.RecordList = __ds_scope.RecordList;

__ds_ns.SourceNote = __ds_scope.SourceNote;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.SelectInput = __ds_scope.SelectInput;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.DesktopShot = __ds_scope.DesktopShot;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.PhoneRow = __ds_scope.PhoneRow;

__ds_ns.PhoneShot = __ds_scope.PhoneShot;

})();
