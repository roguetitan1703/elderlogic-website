/**
 * Phone bezel around live HTML — for mocking screens that don't exist as screenshots yet.
 * @startingPoint section="Product" subtitle="Phone bezel around live HTML" viewport="700x400"
 */
export interface PhoneFrameProps {
  /** Rendered width in px; content is laid out at 375px and scaled. */
  width?: number;
  tone?: 'dark' | 'graphite';
  statusBar?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PhoneFrame(props: PhoneFrameProps): JSX.Element;
