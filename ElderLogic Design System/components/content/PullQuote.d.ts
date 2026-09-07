/** Field quotation in the display serif, with required attribution. */
export interface PullQuoteProps {
  children?: React.ReactNode;
  /** Person or team. Never publish an unattributed quote. */
  attribution?: string;
  role?: string;
  tone?: 'default' | 'onDark';
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
