import React from 'react'
import classNames from 'classnames'
import { Field, FieldInputProps, useForm } from 'react-final-form'

import form from './form.module.scss'

type FormCheckboxProps<T> = Partial<FieldInputProps<T> & {
  value: string | number | readonly string[] | undefined;
}> & {
  name: string;
  label: string;
  icon: string;
}

const FormCheckboxIcon = React.memo(<T,>({ name, label, className, icon, ...props }: FormCheckboxProps<T>) => {
  const {change} = useForm()

  const onChange = React.useCallback((checked: boolean | undefined) => {
    change(name, !checked)
  },[change, name])
  return (
  <Field name={name} type='checkbox'>
    {({ input }) => {
      const {checked} = input

      return (
      <div className={form.checkboxWrapper}>
        <label className={classNames(form.checkboxButton, className)} htmlFor={name}>
          <input {...input} {...props} id={name} />
          <button className={classNames(form.checkboxIconButton, checked && form.buttonActive)} type='button' onClick={() => onChange(checked)} role='checkbox' aria-checked={checked}>
            <div className={form[icon]} />
            <span className={form.text}>
              {label}
            </span>
          </button>
        </label>
      </div>
    )}}
  </Field>
)})

export default FormCheckboxIcon
