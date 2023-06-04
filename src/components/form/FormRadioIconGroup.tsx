import classNames from "classnames";
import React from "react";
import { Field, useForm } from "react-final-form";
import { FormFieldProps } from "./form.model";
import { getFieldError } from "./form.utils";

import form from '../form/form.module.scss'
import { ICat } from "../../routes/AddPost/AddPost";

type FormRadioIconGroupProps = FormFieldProps<string> & {
  options: ICat;

}

const FormRadioIconGroup = React.memo(({name, options, ...props}: FormRadioIconGroupProps) => {
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
        <div className={classNames(form.field, form.radioGroupIconBtnContainer, !!error && form.error, props.className)}>
          {keys.map((key: string) => (
            <label
              key={`${name}${key}`}
              className={form.fieldRadioIconBtn}
            >
              <input
                id={`${name}${key}`}
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
              <label className={classNames(form.radioIconBtn, key===value && form.buttonActive)} htmlFor={`${name}${key}`}>
                <div className={form.description}>
                  <div className={form[key]}/>
                  <span>
                    {Object.values(options[key])}
                  </span>
                </div>
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
)})

export default FormRadioIconGroup
