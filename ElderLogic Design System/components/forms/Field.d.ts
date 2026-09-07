/** Form field wrapper: label, control, hint or error. */
export interface FieldProps {
  label: React.ReactNode;
  hint?: React.ReactNode;
  /** When present, replaces the hint and turns the message brick red. */
  error?: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
