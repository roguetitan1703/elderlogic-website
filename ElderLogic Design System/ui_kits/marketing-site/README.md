# UI kit — ElderLogic marketing website

Click-through recreation of the marketing site, built only from the supplied brand assets, the two
sales PDFs and the five product screenshots. There was no codebase or Figma file to copy from, so
this kit is the *proposed* marketing surface, not a recreation of an existing site.

## Files

| File | Contents |
| --- | --- |
| `index.html` | Entry point. Loads `styles.css`, `_ds_bundle.js`, then the screens. Holds the page router and the responsive layout classes (`.el-hero`, `.el-two-col`, `.el-pricing`, `.el-field-pair`). |
| `mobile.html` | The same site framed at 390px — the width a forwarded link actually opens at. |
| `HomeScreen.jsx` | Hero, counted facts, phone row, the no-rating record card, map, concierge (navy), pricing teaser. Also exports the shared `Section` wrapper. |
| `PlatformScreen.jsx` | Assessment, client management, pre-tour routing, room details. |
| `ConciergeScreen.jsx` | Concierge hero, the four-step outreach sequence, quote, add-on teaser, CTA. |
| `PricingScreen.jsx` | $2,000 platform card + the $500 and $250 add-ons, verbatim from the pricing sheet. |
| `ContactScreen.jsx` | Walkthrough request form with a submitted state. |

## Interactions

Header nav and every in-page CTA route between the five screens; the mobile burger opens a full-width
sheet; the contact form validates nothing but does switch to a confirmation state. Everything else is
static by design.

## Rules this kit follows

- One `primary` button per view.
- Phone screenshots at 280–340px, never subordinate to a desktop shot.
- Two background colours per page, plus one navy section.
- Every published figure carries a `SourceNote`.
- No rating, score, rank or status colour on a home.
