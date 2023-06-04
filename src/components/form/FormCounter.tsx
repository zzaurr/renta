import React from "react"
import { Field, useForm } from "react-final-form"
import { FormFieldProps } from "./form.model"
import { getFieldError } from "./form.utils"

import form from './form.module.scss'
import classNames from "classnames"
import { ICat } from "../../routes/AddPost/AddPost"
  
type FormCounterProps = FormFieldProps<string> & {name: string, item: ICat}

const FormCounter = React.memo(({name, item, ...props}: FormCounterProps) => {
  const {change} = useForm()
  const step = parseFloat(item.step)
  const min = parseFloat(item.min)
  const max = parseFloat(item.max)

  const counter = React.useCallback((value: string, step: number) => {
    const numValue = parseFloat(value)
    const result = numValue + step

    if(result < min) {
      return change(name, item.min)
    }

    if(result > max) {
      return change(name, item.max)
    }
    change(name, result.toString())

  }, [change, item.max, item.min, max, min, name])



  return (
    <Field name={name} initialValue={item.initial}>
      {({input, meta}) => {
        const error = getFieldError(meta)
        const {value} = input

        return (
          <div className={classNames(form.field, form.fieldCounter)}>
              <div className={classNames(form.counterButtonMinus, value === item.min && form.disCounterButton)} onClick={() => counter(value, step*-1)}/>
              <input
                id={name}
                {...input}
                {...props}
                className={form.fieldInput}
                title={name}
                type="text"
                min={item.min}
              />
              <span>{value}</span>
              <div className={classNames(form.counterButtonPlus, value === item.max && form.disCounterButton)} onClick={() => counter(value, step)}/>
          </div>
        )
      }}
    </Field>
  )
})

export default FormCounter
