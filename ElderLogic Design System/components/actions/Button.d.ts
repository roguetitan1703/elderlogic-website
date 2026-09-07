/**
 * ElderLogic action button.
 * @startingPoint section="Actions" subtitle="Button variants, sizes and states" viewport="700x220"
 */
export interface ButtonProps {
  /** `primary` green fill, `secondary` outlined, `quiet` text-only, `onDark`/`onDarkGhost` for navy sections. */
  variant?: 'primary' | 'secondary' | 'quiet' | 'onDark' | 'onDarkGhost';
  /** `md` default. `lg` for hero CTAs. All sizes keep a >=44px tap target except `sm` (36px, desktop-only UI). */
  size?: 'sm' | 'md' | 'lg';
  /** Render as another element, e.g. `"a"` for a link-button. */
  as?: 'button' | 'a';
  /** Full-width — the default treatment for the primary CTA on phone widths. */
  full?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
