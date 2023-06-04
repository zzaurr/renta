import classNames from "classnames";
import React from "react";
import { Field, useForm } from "react-final-form";
import { FormFieldProps } from "./form.model";
import { getFieldError } from "./form.utils";

import form from './form.module.scss'

type FormRadioProps = FormFieldProps<string> & {
  options: string[];
}

const FormRadio = React.memo(({name, ...props}: FormRadioProps) => {
  const {change} = useForm()
  const handleChange = React.useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    change(name, target.value)
  }, [change, name])

  return (
  <Field name={name}>
    {({ input, meta}) => {
      const keys = props.options
      const error = getFieldError(meta)
      const { value } = input

      return (
        <div className={classNames(form.field, form.radioBtnContainer, !!error && form.error, props.className)}>
          {keys.map((key: string) => (
            <p
              key={key}
              className={form.fieldRadioBtn}
            >
              <input
                id={key}
                {...input}
                {...props}
                value={key}
                className={form.fieldInput}
                title={key}
                type='radio'
                onChange={handleChange}
                checked={value === key}
                required
              />
              <label htmlFor={key}>
                {key}
              </label>
            </p>
          ))}
          {!!error && (
            <span className={form.fieldError} title={error}>
              {error}
            </span>
          )}
        </div>
      )
    }}
  </Field>
)})

export default FormRadio
