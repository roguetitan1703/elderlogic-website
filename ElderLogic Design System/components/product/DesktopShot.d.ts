/** A supplied desktop product screenshot in its monitor. */
export interface DesktopShotProps {
  shot?: 'map' | 'clients';
  width?: number;
  caption?: React.ReactNode;
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function DesktopShot(props: DesktopShotProps): JSX.Element;
