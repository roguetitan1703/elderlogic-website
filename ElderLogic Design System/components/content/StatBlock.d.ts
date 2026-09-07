/**
 * A single figure with its subject and an optional provenance note.
 * @startingPoint section="Content" subtitle="Large figure with subject and source note" viewport="700x240"
 */
export interface StatBlockProps {
  /** The figure, pre-formatted with separators, e.g. "2,621". */
  value: string;
  /** What the figure counts. Sentence case, no period. */
  label: React.ReactNode;
  /** Provenance in mono, e.g. "AZDHS · refreshed monthly". */
  note?: string;
  tone?: 'default' | 'onDark';
  size?: 'lg' | 'md';
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
