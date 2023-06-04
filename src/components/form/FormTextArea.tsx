import React from 'react'
import classNames from 'classnames'
import { Field } from 'react-final-form'


import form from './form.module.scss'
import { FormFieldProps } from './form.model'
import { getFieldError } from './form.utils'

const FormTextArea = React.memo(<T,>(props: FormFieldProps<T>) => (
  <Field name={props.name}>
    {({ input, meta }) => {
      const error = getFieldError(meta)

      return (
        <p className={classNames(form.field, !!error && form.error, props.className)}>
          <textarea {...input} {...props} className={form.fieldTextarea} title={props.name} rows={5}/>
          {!!error && (
            <span className={form.fieldError} title={error}>
              {error}
            </span>
          )}
        </p>
      )
    }}
  </Field>
))

export default FormTextArea
