const { SectionHeading, FeatureItem, Card, Button, PhoneShot, DesktopShot, SourceNote, RecordList } = window.ElderLogicDesignSystem_cac832;

function FeatureBlock({ eyebrow, title, lead, items, media, flip }) {
  return (
    <div className={'el-two-col' + (flip ? ' el-flip' : '')} style={{ alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)' }}>
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} size="md" />
        <div style={{ display: 'grid', gap: 'var(--sp-5)' }}>
          {items.map((i) => <FeatureItem key={i.label} label={i.label}>{i.body}</FeatureItem>)}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>{media}</div>
    </div>
  );
}

function PlatformScreen({ go, base }) {
  return (
    <main>
      <window.Section>
        <SectionHeading size="xl" eyebrow="The platform"
          title="Senior living placement, community intelligence and targeted outreach in one place."
          lead="2,621 Arizona senior living and care facilities. One interface, refreshed monthly, carrying the state's own licensing and enforcement record." />
        <SourceNote style={{ marginTop: 'var(--sp-6)' }}>Data published by AZDHS · refreshed monthly</SourceNote>
      </window.Section>

      <window.Section tone="subtle" style={{ borderTop: '1px solid var(--border-hairline)' }}>
        <FeatureBlock
          eyebrow="Client assessment"
          title="Capture what matters, fast."
          lead="A comprehensive assessment designed to get placement started quickly. Only the critical fields are required, so a community can make an initial yes-or-no call at a glance."
          items={[
            { label: 'Easy to complete', body: 'Simple, step-by-step fields for efficient data entry.' },
            { label: 'Built for quick responses', body: 'Only critical client information is required.' },
            { label: 'Built-in validation', body: 'Reduces errors and keeps data consistent.' },
          ]}
          media={<PhoneShot shot="assessment" width={300} assetBase={base} />}
        />
      </window.Section>

      <window.Section>
        <FeatureBlock flip
          eyebrow="Client management"
          title="Every client. One place."
          lead="ElderLogic keeps client information organised and accessible without the complexity of a traditional CRM — less clutter, less training, faster adoption."
          items={[
            { label: 'Centralised client view', body: 'Every submitted client sits in one accessible workspace.' },
            { label: 'Key details at a glance', body: 'Demographics, POA information and client details.' },
            { label: 'Full assessment access', body: 'Open any client to review the complete assessment.' },
          ]}
          media={<DesktopShot shot="clients" width={520} assetBase={base} />}
        />
      </window.Section>

      <window.Section tone="paper">
        <FeatureBlock
          eyebrow="Pre-tour routing"
          title="Every pre-tour becomes a marketing opportunity."
          lead="Guide the client. Evaluate the home. Turn a warm introduction into a lasting relationship."
          items={[
            { label: 'Dynamic route optimisation', body: 'Re-optimise the pre-tour route at any time as plans change.' },
            { label: 'Client-specific room details', body: "Each home's response to this client's needs, with the state's record beside it." },
            { label: 'Direct AZDHS access', body: "Open the home's full AZDHS listing straight from the route." },
          ]}
          media={<PhoneShot shot="route" width={300} assetBase={base} />}
        />
      </window.Section>

      <window.Section>
        <div className="el-two-col">
          <SectionHeading eyebrow="Room details" title="The home's answer, and the state's record, side by side."
            lead="No score is calculated from these numbers. They are shown as published, so your team can read them and decide." />
          <Card padding="lg">
            <RecordList columns={1} rows={[
              { label: 'Accepts hospice on site', value: 'Yes' },
              { label: 'Room available', value: 'Private · ground floor' },
              { label: 'Two-person assist', value: 'Yes' },
              { label: 'Last inspection', value: '2026-05-02' },
              { label: 'Substantiated violations, 24 mo', value: '0' },
            ]} />
            <SourceNote style={{ marginTop: 'var(--sp-4)' }}>Community response 2026-08-14 · AZDHS file refreshed 1 Aug 2026</SourceNote>
            <div style={{ marginTop: 'var(--sp-6)' }}><Button variant="secondary" onClick={() => go('/contact')}>Request a walkthrough</Button></div>
          </Card>
        </div>
      </window.Section>
    </main>
  );
}
Object.assign(window, { PlatformScreen });
