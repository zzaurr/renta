import React from "react"
import { Field, useForm } from "react-final-form"
import { FormFieldProps } from "./form.model"
import { getFieldError } from "./form.utils"
import form from './form.module.scss'
import classNames from "classnames"

type FormSelectProps = FormFieldProps<string> & {
  options: {[key: string]: string}
}

const FormSelect = React.memo(({name, className, options, ...props}: FormSelectProps) => {
  const { change } = useForm()

  const handleChange = React.useCallback(({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    change(name, target.value)
  }, [change, name])

  return (
    <Field name={name}>
      {({input, meta}) => {
        const keys = Object.keys(options)
        const error = getFieldError(meta)

        return (
          <p className={classNames(form.field, form.fieldSelect, !!error && form.error, className)}>
            <select
              value={input.value}
              onChange={handleChange}
              className={form.fieldInput}
            >
              <option key='default' value='' defaultChecked disabled={meta.dirty}>
                Please select
              </option>
              {keys.map((key: string) => (
                <option
                  id={key}
                  key={key}
                  {...input}
                  {...props}
                  value={key}
                  className={form.fieldInput}
                  title={options[key]}
                >
                  {options[key]}
                </option>
              ))}
            </select>
            <span className={form.chevron} />
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
})

export default FormSelect
