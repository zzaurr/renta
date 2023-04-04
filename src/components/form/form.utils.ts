import { FieldMetaState } from "react-final-form";

export const getFieldError = <T,>({
  error,
  submitError,
  touched,
  dirtySinceLastSubmit,
  modifiedSinceLastSubmit,
}: FieldMetaState<T>): string | undefined => (
  touched && !dirtySinceLastSubmit && !modifiedSinceLastSubmit ? error || submitError : undefined
)