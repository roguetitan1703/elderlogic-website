const { SectionHeading, Card, Field, TextInput, SelectInput, Button, CheckList, SourceNote } = window.ElderLogicDesignSystem_cac832;

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return (
    <main>
      <window.Section>
        <div className="el-two-col">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)' }}>
            <SectionHeading eyebrow="Request a walkthrough" title="Fifteen minutes, on your phone or a screen share."
              lead="Tell us who you are and we will show you the map, an assessment and a real route for your territory." />
            <CheckList items={[
              'We reply within one business day',
              'No obligation, no placement-agent fees',
              'Arizona hospice teams only, for now',
            ]} />
            <div style={{ display: 'grid', gap: 'var(--sp-1)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>
              <span>hello@elderlogic.app</span>
              <span>(480) 685-5657</span>
            </div>
          </div>
          <Card padding="lg">
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', color: 'var(--text-strong)' }}>Thank you — we have it.</span>
                <p style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-body)' }}>Someone from ElderLogic will reply within one business day.</p>
                <SourceNote>Request received · 31 Aug 2026</SourceNote>
                <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gap: 'var(--sp-5)' }}>
                <div className="el-field-pair">
                  <Field label="First name" required htmlFor="fn"><TextInput id="fn" placeholder="Jordan" /></Field>
                  <Field label="Last name" required htmlFor="ln"><TextInput id="ln" placeholder="Reyes" /></Field>
                </div>
                <Field label="Hospice or agency" required htmlFor="ag"><TextInput id="ag" placeholder="Sonoran Valley Hospice" /></Field>
                <Field label="Your role" htmlFor="rl"><SelectInput id="rl" options={['Owner / Executive Director', 'Business Development Manager', 'Community Liaison', 'Other']} /></Field>
                <div className="el-field-pair">
                  <Field label="Work email" required htmlFor="em" hint="We reply within one business day."><TextInput id="em" type="email" placeholder="you@hospice.com" /></Field>
                  <Field label="Phone" htmlFor="ph"><TextInput id="ph" placeholder="(480) 555-0123" /></Field>
                </div>
                <Field label="Territory or counties you cover" htmlFor="tr"><TextInput id="tr" multiline rows={3} placeholder="Maricopa, Pinal — two liaisons" /></Field>
                <Button type="submit" size="lg" full>Request a walkthrough</Button>
              </form>
            )}
          </Card>
        </div>
      </window.Section>
    </main>
  );
}
Object.assign(window, { ContactScreen });
