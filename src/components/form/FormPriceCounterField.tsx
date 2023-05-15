import { Field, useForm } from "react-final-form"
import { NumericFormat } from "react-number-format"
import { FormFieldProps } from "./form.model"
import { getFieldError } from "./form.utils"

import form from './form.module.scss'
import React from "react"
import classNames from "classnames"
import { ICat } from "../../routes/AddPost/AddPost"

type FormPriceCounterFieldProps = FormFieldProps<string> & {item: ICat }

const FormPriceCounterField = React.memo(({item, ...props}: FormPriceCounterFieldProps) => {
  const {change} = useForm()
  const numbMin = parseFloat(item.min)
  const numbMax = parseFloat(item.max)

  const handleCount = React.useCallback((value: string, step: number) => {
    const numValue = parseFloat(value)
    const result = numValue + step

    if(numValue <= numbMin && result < numValue) return

    if(numValue >= numbMax && result > numValue) return

    if(result < numbMin) {

      return change(props.name, item.min)
    }

    if(result > numbMax) {

      return change(props.name, item.max)
    }

    return change(props.name, result.toString())

  },[change, item.max, item.min, numbMax, numbMin, props.name])


  const minValue = (min: string, max: string) => (value: string) => {
    const numbValue = parseFloat(value)

    if( numbValue < numbMin || numbValue > numbMax) {
      return `Введите базовую цену от ${numbMin}₽ до ${numbMax}₽.`
    }

    return undefined
  }

  const composeValidators = (...validators: any) => (value: string) => (
    validators.reduce((error: any, validator: any) => error || validator(value), undefined)
  )

  return (
    <Field name={props.name} validate={composeValidators(minValue(item.min, item.max))} defaultValue={item.initial}>
      {({input, meta}) => {
        const error = getFieldError(meta)
        const {value} = input

        return (
          <div className={classNames(form.field, !!error && form.error, props.className)}>
            <div className={form.price}>
              <div className={classNames(form.counterButtonMinus, parseFloat(value) <= numbMin && form.disCounterButton)} onClick={() => handleCount(value, -item.step)} />
              <p>
                <NumericFormat
                  {...input}
                  value={value}
                  required
                  type="text"
                  suffix="€"
                  placeholder="P"
                  title={props.name}
                  className={form.fieldInput}
                  onValueChange={(values, sourceInfo) => {
                    !sourceInfo.event && change(props.name, values.formattedValue)
                  }}
                />
              </p>
              <div className={classNames(form.counterButtonPlus, parseFloat(value) >= numbMax && form.disCounterButton)} onClick={() => handleCount(value, parseFloat(item.step))} />
            </div>
            <span className={form.tooltip}>за ночь</span>
            {error &&  (
              <span className={form.fieldError}>
                {error}
              </span>
            )}
            <div className={form.similar}>
              <span>
                Похожее жилье поблизости обычно стоит от 1522 до 2536 за ночь.
              </span>
            </div>
          </div>
        )
      }}
    </Field>
  )
})

export default FormPriceCounterField
