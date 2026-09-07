/** Mono provenance line attached to any published figure or record. */
export interface SourceNoteProps {
  children?: React.ReactNode;
  tone?: 'default' | 'onDark';
  style?: React.CSSProperties;
}
export declare function SourceNote(props: SourceNoteProps): JSX.Element;
