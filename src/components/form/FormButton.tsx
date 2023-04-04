import React from "react";
import { useFormState } from "react-final-form"

import form from './form.module.scss'

type FormButtonProps = {
  label?: string;
  disabled?: boolean;
  className?: string;
}
const FormButton = React.memo(({ label, disabled, className}: FormButtonProps) =>  {
  const { submitting } = useFormState()
  const title = (className && label) || (className ? '' : label || 'Submit')

  return (
    <button
    title={label}
    type="submit"
    className={`${form.button} ${className || ''}`}
    disabled={submitting || disabled}
  >
    {submitting ? '...' : title}
  </button>
  )
})

export default FormButton
