/**
 * The ElderLogic logo lockup, rendered from the supplied SVG files.
 */
export interface LogoProps {
  /** `full` = green/navy lockup, `full-white` for dark surfaces, `full-black` for print/mono, `mark` = shield only. */
  variant?: 'full' | 'full-white' | 'full-black' | 'mark';
  /** Rendered height in px. Default 44 (lockup) / 32 (mark). Minimum legible lockup height is 32px. */
  height?: number;
  /** Prefix for the asset path when the page is not at the design-system root, e.g. "../..". */
  assetBase?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
