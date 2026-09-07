/**
 * A plan or add-on card, matching the published Concierge pricing sheet.
 * @startingPoint section="Commerce" subtitle="Plan and add-on pricing cards" viewport="700x420"
 */
export interface PriceCardProps {
  /** Plan name, uppercased by the component. */
  name: string;
  /** Formatted price, e.g. "$2,000". */
  price: string;
  /** Defaults to "/month". */
  cadence?: string;
  /** Secondary line for per-seat pricing, e.g. "+ $100 / user / month". */
  addon?: string;
  description?: React.ReactNode;
  items?: string[];
  footnote?: React.ReactNode;
  /** Navy fill — use on exactly one card per pricing view. */
  emphasis?: boolean;
  style?: React.CSSProperties;
}
export declare function PriceCard(props: PriceCardProps): JSX.Element;
