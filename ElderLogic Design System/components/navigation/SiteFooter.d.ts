/** Navy site footer carrying the brand contact block and the AZDHS provenance line. */
export interface SiteFooterProps {
  columns?: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
