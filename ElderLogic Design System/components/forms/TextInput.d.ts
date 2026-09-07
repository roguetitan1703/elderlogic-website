/** Single-line or multiline text control. */
export interface TextInputProps {
  invalid?: boolean;
  multiline?: boolean;
  rows?: number;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function TextInput(props: TextInputProps): JSX.Element;
