/**
 * Label/value rows for published state records — the system's only data display.
 * @startingPoint section="Data" subtitle="Published AZDHS record rows" viewport="700x300"
 */
export interface RecordListProps {
  rows?: Array<{ label: string; value: React.ReactNode }>;
  /** 1 on phone, 2 in a desktop column. */
  columns?: 1 | 2;
  tone?: 'default' | 'onDark';
  style?: React.CSSProperties;
}
export declare function RecordList(props: RecordListProps): JSX.Element;
