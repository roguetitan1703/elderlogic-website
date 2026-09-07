/** Uppercase kicker label that sits above a heading. */
export interface EyebrowProps {
  tone?: 'brand' | 'muted' | 'onDark';
  /** Prepend a 24px green rule. Use on section openers, not inside cards. */
  rule?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
