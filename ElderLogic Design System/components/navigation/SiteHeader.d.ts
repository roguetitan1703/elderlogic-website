/**
 * Marketing site header: logo, nav, one CTA. Collapses to a full-width sheet below 900px.
 * @startingPoint section="Navigation" subtitle="Sticky site header with mobile sheet" viewport="700x140"
 */
export interface SiteHeaderProps {
  links?: Array<{ label: string; href: string }>;
  /** href of the current page — gets a green underline. */
  active?: string;
  onNavigate?: (href: string) => void;
  cta?: string;
  onCta?: () => void;
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
