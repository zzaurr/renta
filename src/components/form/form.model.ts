import { FieldInputProps } from "react-final-form";

export type FormFieldProps<T> = Partial<FieldInputProps<T> & {
  value: string | number | readonly string[] | undefined;
}> & {
  name: string;
  className?: string;
}