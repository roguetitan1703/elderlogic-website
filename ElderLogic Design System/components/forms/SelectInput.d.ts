/** Native select, styled to match TextInput. */
export interface SelectInputProps {
  options?: string[];
  /** Empty-state text. Defaults to "-Select-", matching the product. */
  placeholder?: string;
  invalid?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function SelectInput(props: SelectInputProps): JSX.Element;
