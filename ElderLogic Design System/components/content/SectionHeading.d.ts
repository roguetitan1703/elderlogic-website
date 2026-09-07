/**
 * Section opener: eyebrow, serif headline, lead paragraph.
 * @startingPoint section="Content" subtitle="Section opener with eyebrow and lead" viewport="700x260"
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** `xl` page hero, `lg` section default, `md` sub-section. */
  size?: 'xl' | 'lg' | 'md';
  align?: 'left' | 'center';
  tone?: 'default' | 'onDark';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
