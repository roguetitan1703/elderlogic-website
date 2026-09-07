The site header. Sticky, translucent white, hairline bottom border, exactly one CTA.

```jsx
<SiteHeader active="/platform" assetBase="../.."
  links={[{label:'Platform',href:'/platform'},{label:'Concierge',href:'/concierge'},{label:'Pricing',href:'/pricing'}]}
  onNavigate={setPage} onCta={() => setPage('/contact')} />
```

Never more than four nav links. The burger sheet is the primary experience — a forwarded link opens on a phone.
