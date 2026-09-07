# Decisions

Answered 2 September 2026. This file is canonical — where it disagrees with anything else in `Content/`, this wins.

---

## Numbers — provisional, fact-check later

| | Decision |
|---|---|
| **A1 · Home count** | Use **~2,600, as of August 2026**. Chosen because it is what all eight website decks already carry and it is honestly rounded. Her deck's 2,621 and the positioning doc's ~2,700 stand down until the fact-check pass. |
| **A2 · 150 / 87 days** | Publish, unsourced for now. **Flagged as the most challengeable pair of numbers on the page** — first thing to verify before go-live. |
| **A3 · Funnel** | **Six rows**, including *40 already ruled out by your team*. It is her own first telling and it is the row a competitor cannot copy. Provenance line pending. |

**Standing rule:** every number on the page carries an entry in the fact-check pass before go-live. Nothing ships on a number nobody has checked.

## A4 · Proof

The home's message publishes **verbatim, unattributed**. Section 3.

## FAQ

**Answers are drafted by us and taken to the client at presentation.** The point of drafting them fully is to give her something concrete to correct — that session doubles as the content and PR review, so the FAQ ships complete rather than as gaps.

## Wording

| | Decision |
|---|---|
| **C10 · Naming** | Follow the app and her deck. **"Marketing visits"** is the product term wherever the product names it — the app navigation says *Marketing Visits Form* and *All Marketing Visits*. **"Territory"** stays as ordinary prose ("the territory you cover"). Not interchangeable: the product noun is marketing visits, the concept is territory. |
| **C11 · Blacklist** | Keep the word. It is the app's word and the customer's word. |
| **C12 · Call length** | **No duration on the page.** An unspecified call length is more confident than a stated one. Terrah to confirm 15 or 30 for internal use; it does not go on the site either way. |
| **C13 · CTA** | **Book a demo**, one verb, site-wide. Kept over *Book a call* because a cold reader needs to know what they get, not just what it is. Trivially switchable. |
| **C14 · Family route** | **Public.** Stays as step 7 of the walkthrough. |

## Contact and footer

- **D15** — `hello@elderlogic.app`
- **D16** — footer says **Arizona** for now. A street address goes in later, when Terrah supplies one.
- **D17** — (480) 685-5657 stays

## Assets

| | Decision |
|---|---|
| **E18 · Missing captures** | Client takes them. We build **grey placeholder blocks with real alt text** at every slot, sized to the final screen, so the page is complete and reviewable without them. |
| **E19 · Retouches** | Approved. Strip the *"57 d 3 h 43 min late"* badge and the dog avatar from `phone-route.png`; reseed `desk-clients.png` off the cartoon data. |
| **E20 · Map pins** | Keep purple. It is the real app; changing it would make the screenshot a lie. |
| **E21 · Video** | None, and **no slot held for one**. |

## Build

| | Decision |
|---|---|
| **Stack** | **Next.js.** Custom, not a site builder. |
| **CMS** | **None for now.** Purely a website. Copy lives in the codebase; edits come through us. An admin panel is a later phase, not this one. |
| **Hosting / review** | **Vercel preview URL** for her review. Go live only after copy review, polish and her sign-off. |
| **Analytics** | Nothing beyond the basics for now. |
| **Wix** | Comes down at go-live, not before. |
| **Timeline** | Handled client-side. |

---

## Still outstanding

1. **Fact-check pass** on every number, before go-live: the home count and its date, 150 / 87, and the funnel's provenance.
2. **FAQ sign-off** at the presentation session, which is also the PR and content review.
3. **Call length** — 15 or 30, internal only.
4. **Street address** — later, from Terrah. Footer reads *Arizona* until then.
