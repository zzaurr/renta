import React from "react"
import { Field } from "react-final-form"
import { FormFieldProps } from "./form.model"
import { getFieldError } from "./form.utils"
import form from './form.module.scss'
import classNames from "classnames"

const FormField = React.memo(<T,> (props: FormFieldProps<T>) => (
  <Field name={props.name}>
    {({ input, meta}) => {
      const error = getFieldError(meta)

      return (
        <p className={classNames(form.field, !!error && form.error, props.className)}>
          <input {...input} {...props} className={form.fieldInput} title={props.name}/>
          {!!error && (
            <span className={form.fieldError} title={error}>
              {error}
            </span>
          )}
        </p>
      )
    }}
  </Field>
  )
)

export default FormField
