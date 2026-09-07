const { SectionHeading, FeatureItem, Card, PullQuote, Button, ArrowLink, PhoneShot, Eyebrow } = window.ElderLogicDesignSystem_cac832;

const STEPS = [
  { n: '01', label: 'Your rep picks the day', body: 'Date, time and the area they want to work — their territory, their schedule.' },
  { n: '02', label: 'We call the neighbourhood', body: 'ElderLogic contacts the licensed communities within a mile of the anchor address with your placement value proposition.' },
  { n: '03', label: 'We build the route', body: 'Only the homes that said they want the meeting go on the route, ordered for driving.' },
  { n: '04', label: 'Your rep walks in expected', body: 'With a reason to connect: your hospice places its own residents, so the home pays no placement-agent fee.' },
];

function ConciergeScreen({ go, base }) {
  return (
    <main>
      <window.Section>
        <div className="el-hero">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)', alignItems: 'flex-start' }}>
            <Eyebrow rule>ElderLogic Concierge</Eyebrow>
            <h1 style={{ fontSize: 'var(--fs-display-2)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-display)', maxWidth: '22ch' }}>
              Plan the day. Work the territory. Build the relationships.
            </h1>
            <p style={{ fontSize: 'var(--fs-lead)', lineHeight: 'var(--lh-body)', maxWidth: '46ch' }}>
              Your team controls their schedule and territory. ElderLogic Concierge handles the outreach and
              the route planning, so reps arrive at communities already interested in meeting them.
            </p>
            <Button size="lg" onClick={() => go('/contact')}>Request a walkthrough</Button>
          </div>
          <PhoneShot shot="visit-form" width={300} assetBase={base} style={{ justifySelf: 'center' }} />
        </div>
      </window.Section>

      <window.Section tone="dark">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-12)' }}>
          <SectionHeading tone="onDark" eyebrow="How a marketing day gets built" title="Four steps, none of them cold." />
          <div style={{ display: 'grid', gap: 'var(--sp-8)', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', color: 'var(--green-300)' }}>{s.n}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', color: 'var(--n-0)' }}>{s.label}</span>
                <p style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--navy-200)' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </window.Section>

      <window.Section tone="paper">
        <div className="el-two-col">
          <PullQuote attribution="What we tell the community" role="on every call">
            This hospice does its own placements, so you never pay a placement-agent fee.
          </PullQuote>
          <div style={{ display: 'grid', gap: 'var(--sp-6)' }}>
            <FeatureItem label="Verified visits, if you want them">Geofenced check-in and check-out, with completed, missed and unverified visits reported monthly.</FeatureItem>
            <FeatureItem label="Outreach you can audit">Homes identified, homes contacted, responses received, homes that met the client's criteria.</FeatureItem>
            <ArrowLink onClick={(e) => { e.preventDefault(); go('/pricing'); }}>See what the add-ons cost</ArrowLink>
          </div>
        </div>
      </window.Section>

      <window.Section tone="subtle">
        <Card padding="lg" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-6)', alignItems: 'center', justifyContent: 'space-between' }}>
          <SectionHeading size="md" title="Fifteen minutes is enough to see it." lead="We will walk your team through the map, the assessment and a real route." style={{ maxWidth: '38ch' }} />
          <Button size="lg" onClick={() => go('/contact')}>Request a walkthrough</Button>
        </Card>
      </window.Section>
    </main>
  );
}
Object.assign(window, { ConciergeScreen });
