const { SectionHeading, PriceCard, Card, Button, SourceNote, CheckList } = window.ElderLogicDesignSystem_cac832;

function PricingScreen({ go }) {
  return (
    <main>
      <window.Section>
        <SectionHeading size="xl" eyebrow="Pricing" title="One subscription, two optional add-ons."
          lead="ElderLogic Concierge gives hospice teams the tools, data and support to simplify senior living placement and grow community relationships." />
      </window.Section>

      <window.Section tone="subtle" style={{ borderTop: '1px solid var(--border-hairline)' }}>
        <div className="el-pricing">
          <PriceCard emphasis
            name="ElderLogic Concierge Platform"
            price="$2,000"
            addon="+ $100 / user / month"
            description="Everything a hospice placement and outreach team needs, for the whole agency."
            items={[
              'Comprehensive Arizona senior living database, updated monthly',
              'Community contact information & historical AZDHS data',
              'Client assessment & placement workflow',
              'Community search & matching',
              'Community outreach & response collection',
              'Customised client pre-tour routes',
              'Interactive mapping & custom route creation',
              'Targeted marketing visit planning & routing',
              'Community details & placement information',
              'Client & placement management',
            ]}
            footnote="Billed monthly. No placement-agent fees, ever." />
          <div style={{ display: 'grid', gap: 'var(--sp-6)', alignContent: 'start' }}>
            <PriceCard
              name="Monthly employee visit verification & reporting"
              price="$500"
              description="Verify that your team visits the communities they say they visit."
              items={[
                'Compare employee activity against internal marketing goals',
                'Location-verified marketing visits',
                'Geofenced check-in & check-out verification',
                'Completed, missed & unverified visits',
                'Individual employee activity reporting',
                'Monthly management reporting',
              ]} />
            <PriceCard
              name="Monthly placement outreach reporting"
              price="$250"
              description="See the full scope of outreach behind every client placement."
              items={[
                'Monthly placement volume & outreach metrics',
                'Homes identified across client searches',
                'Homes contacted & responses received',
                'Homes meeting client-specific criteria',
                'Homes selected for pre-tour routes',
                'Outreach response & qualification rates',
              ]} />
          </div>
        </div>
      </window.Section>

      <window.Section>
        <div className="el-two-col">
          <SectionHeading size="md" eyebrow="What is included either way" title="The database is not an add-on."
            lead="Every subscription carries the full Arizona facility record, refreshed monthly, with the state's licensing and enforcement history attached to each home." />
          <Card padding="lg" tone="paper">
            <CheckList items={[
              'All 2,621 licensed Arizona senior living & care facilities',
              'Validated community contact information',
              'Licensing, inspection, violation & enforcement history',
              'No scores, stars or rankings — the published record only',
            ]} />
            <SourceNote style={{ marginTop: 'var(--sp-4)' }}>AZDHS licensing &amp; enforcement file · refreshed monthly</SourceNote>
            <div style={{ marginTop: 'var(--sp-6)' }}><Button onClick={() => go('/contact')}>Request a walkthrough</Button></div>
          </Card>
        </div>
      </window.Section>
    </main>
  );
}
Object.assign(window, { PricingScreen });
