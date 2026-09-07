/** List of what a plan includes. */
export interface CheckListProps {
  items?: string[];
  tone?: 'default' | 'onDark';
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function CheckList(props: CheckListProps): JSX.Element;
