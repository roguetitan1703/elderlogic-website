/**
 * A supplied product phone screenshot, alpha-cut so it sits on any background.
 * @startingPoint section="Product" subtitle="Phone screenshot at full weight" viewport="700x400"
 */
export interface PhoneShotProps {
  shot?: 'assessment' | 'visit-form' | 'route';
  /** Rendered width in px. 300–380 on phone, 340–420 in a desktop column. Never below 260. */
  width?: number;
  caption?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function PhoneShot(props: PhoneShotProps): JSX.Element;
