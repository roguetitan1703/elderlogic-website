/** Hairline-bordered content surface. */
export interface CardProps {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** `paper` is the warm surface; `onDark` for navy sections. */
  tone?: 'default' | 'inset' | 'paper' | 'onDark' | 'outline';
  /** Adds hover shadow — only for cards that are actually links. */
  interactive?: boolean;
  as?: 'div' | 'a' | 'article' | 'li';
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
