/**
 * Several phone screens at equal weight — the system's signature product display.
 * @startingPoint section="Product" subtitle="Three phone screens at equal weight" viewport="700x420"
 */
export interface PhoneRowProps {
  shots?: Array<'assessment' | 'visit-form' | 'route'>;
  captions?: React.ReactNode[];
  width?: number;
  /** Offset alternate phones downward. Turn off inside a card. */
  stagger?: boolean;
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function PhoneRow(props: PhoneRowProps): JSX.Element;
