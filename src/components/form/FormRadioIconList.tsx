import classNames from "classnames";
import React from "react";
import { Field, useForm } from "react-final-form";
import { FormFieldProps } from "./form.model";
import { getFieldError } from "./form.utils";

import form from '../form/form.module.scss'

type FormRadioIconListProps = FormFieldProps<string> & {
  options: {[key: string] :{[key: string]: string}};
}

const FormRadioIconList = React.memo(({name, options, ...props}: FormRadioIconListProps) => {
  const {change} = useForm()
  const handleChange = React.useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    change(name, target.value)
  }, [change, name])

  return (
    <Field name={name} initialValue={Object.keys(options)[0]}>
      {({ input, meta}) => {
        const keys = Object.keys(options)
        const error = getFieldError(meta)
        const { value } = input

        return (
          <div className={classNames(form.field, form.radioIconBtnContainer, !!error && form.error, props.className)}>
            {keys.map((key: string) => (
              <label
                key={key}
                className={form.fieldRadioIconBtn}
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
                />
                <label className={classNames(form.radioIconBtn, key===value && form.buttonActive)} htmlFor={key}>
                  <div className={form.description}>
                    <h2 className={form.title}>
                      {Object.keys(options[key])}
                    </h2>
                    <span>
                      {Object.values(options[key])}
                    </span>
                  </div>
                    <div className={form[key]}/>
                </label>
              </label>
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
  )
})

export default FormRadioIconList
