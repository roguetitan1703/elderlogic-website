const { SectionHeading, Eyebrow, FeatureItem, StatBlock, Card, PullQuote, Button, ArrowLink, PhoneRow, PhoneShot, DesktopShot, RecordList, SourceNote, CheckList } = window.ElderLogicDesignSystem_cac832;

function Section({ tone = 'page', children, style }) {
  const bg = { page: 'var(--surface-page)', subtle: 'var(--surface-subtle)', paper: 'var(--surface-paper)', dark: 'var(--surface-dark)' }[tone];
  return (
    <section style={{ background: bg, ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>{children}</div>
    </section>
  );
}

function HomeScreen({ go, base }) {
  return (
    <main>
      {/* hero */}
      <Section>
        <div className="el-hero">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)', alignItems: 'flex-start' }}>
            <Eyebrow rule>Hospice placement · Arizona</Eyebrow>
            <h1 style={{ fontSize: 'var(--fs-display-1)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-display)', maxWidth: '20ch' }}>
              A shortlist of homes that will actually take your patient.
            </h1>
            <p style={{ fontSize: 'var(--fs-lead)', lineHeight: 'var(--lh-body)', maxWidth: '46ch', color: 'var(--text-body)' }}>
              ElderLogic keeps a monthly-refreshed record of every licensed senior living home in Arizona,
              with the licensing and inspection history the state has published. Our concierge team does the
              calling and the negotiating. Your team gets names, addresses and a route.
            </p>
            <div className="el-hero-cta">
              <Button size="lg" onClick={() => go('/contact')}>Request a walkthrough</Button>
              <Button size="lg" variant="secondary" onClick={() => go('/pricing')}>See pricing</Button>
            </div>
            <SourceNote>Data published by AZDHS · refreshed monthly</SourceNote>
          </div>
          <PhoneShot shot="route" width={320} assetBase={base} style={{ justifySelf: 'center' }} />
        </div>
      </Section>

      {/* counted facts */}
      <Section tone="subtle" style={{ borderTop: '1px solid var(--border-hairline)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div style={{ display: 'grid', gap: 'var(--sp-10)', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
          <StatBlock size="md" value="2,621" label="Licensed Arizona senior living & care facilities" note="AZDHS · refreshed monthly" />
          <StatBlock size="md" value="Monthly" label="Full refresh of licensing, inspection & enforcement history" />
          <StatBlock size="md" value="1 mi" label="Search radius around any anchor address a rep picks" />
        </div>
      </Section>

      {/* field-first */}
      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-12)' }}>
          <SectionHeading
            eyebrow="Built for the field"
            title="Your liaisons work from a phone. So does ElderLogic."
            lead="Assessment, visit planning and the pre-tour route are all built for a rep sitting in a parking lot between visits — not for a desk they never sit at."
          />
          <PhoneRow width={280} assetBase={base} captions={[
            'A client assessment with only the fields a community needs to say yes or no.',
            'Reps pick their own date, time and target area. ElderLogic builds the route.',
            'An optimised pre-tour route, re-optimised whenever the day changes.',
          ]} />
        </div>
      </Section>

      {/* the no-rating rule */}
      <Section tone="paper">
        <div className="el-two-col">
          <SectionHeading
            eyebrow="What the state has published"
            title="We don't rate homes. We show the record."
            lead="No stars, no scores, no rankings. ElderLogic reproduces the licensing, inspection, violation and enforcement history from the Arizona Department of Health Services, and lets your team read it."
          />
          <Card padding="lg" style={{ background: 'var(--n-0)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', color: 'var(--text-strong)', marginBottom: 'var(--sp-4)' }}>Golden Manor Assisted Living</div>
            <RecordList rows={[
              { label: 'License number', value: 'AL8271H' },
              { label: 'License type', value: 'Assisted Living Home' },
              { label: 'Capacity', value: '10 beds' },
              { label: 'Last inspection', value: '2026-06-18' },
              { label: 'Substantiated violations, 24 mo', value: '2' },
              { label: 'Enforcement actions on file', value: '0' },
            ]} />
            <SourceNote style={{ marginTop: 'var(--sp-4)' }}>AZDHS licensing &amp; enforcement file · refreshed 1 Aug 2026</SourceNote>
          </Card>
        </div>
      </Section>

      {/* map */}
      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-10)', alignItems: 'flex-start' }}>
          <SectionHeading
            eyebrow="Interactive mapping"
            title="One map instead of a contact list."
            lead="Search by name or address, see every licensed community around it, and let a liaison work a territory rather than a spreadsheet."
          />
          <DesktopShot shot="map" width={880} assetBase={base} caption="Every licensed community in the ElderLogic database, searchable from one view." />
        </div>
      </Section>

      {/* concierge, on navy */}
      <Section tone="dark">
        <div className="el-two-col">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)' }}>
            <SectionHeading tone="onDark" eyebrow="ElderLogic Concierge"
              title="We make the calls. Your rep walks in expected."
              lead="Reps choose when and where they want to market. We contact the communities nearby with your placement value proposition and build the route around the homes that want the meeting." />
            <PullQuote tone="onDark" attribution="What we tell the community" role="on every call">
              This hospice does its own placements, so you never pay a placement-agent fee.
            </PullQuote>
          </div>
          <div style={{ display: 'grid', gap: 'var(--sp-6)' }}>
            <FeatureItem tone="onDark" label="Rep-driven scheduling">Reps choose their own date, time and target area based on their territory.</FeatureItem>
            <FeatureItem tone="onDark" label="Concierge outreach &amp; routing">We contact nearby communities and build the route around the ones interested in meeting.</FeatureItem>
            <FeatureItem tone="onDark" label="Warmer introductions">Reps arrive with a reason to connect, not a cold clipboard.</FeatureItem>
            <ArrowLink tone="onDark" onClick={(e) => { e.preventDefault(); go('/concierge'); }}>How the concierge works</ArrowLink>
          </div>
        </div>
      </Section>

      {/* pricing teaser */}
      <Section tone="subtle">
        <div className="el-two-col">
          <SectionHeading eyebrow="Pricing" title="$2,000 a month, plus $100 per user."
            lead="One platform subscription covers the database, the assessment workflow, outreach, mapping and routing. Two optional add-ons cover visit verification and outreach reporting." />
          <Card padding="lg">
            <CheckList items={[
              'Comprehensive Arizona senior living database, updated monthly',
              'Community contact information & historical AZDHS data',
              'Client assessment & placement workflow',
              'Community outreach & response collection',
              'Customised client pre-tour routes',
            ]} />
            <div style={{ marginTop: 'var(--sp-6)', display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
              <Button onClick={() => go('/pricing')}>Full pricing</Button>
              <Button variant="secondary" onClick={() => go('/contact')}>Request a walkthrough</Button>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}

Object.assign(window, { HomeScreen, Section });
