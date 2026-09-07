/** Capability item: uppercase label, one sentence, green hanging rule. */
export interface FeatureItemProps {
  label: string;
  children?: React.ReactNode;
  tone?: 'default' | 'onDark';
  style?: React.CSSProperties;
}
export declare function FeatureItem(props: FeatureItemProps): JSX.Element;
