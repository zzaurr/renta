import React from 'react'
// import button from './button.module.scss'
import button from './button.module.scss'

type ButtonProps = {
  onClick: () => void,
  className?: string,
  label: string,
}

const Button = ({ className, onClick, label }: ButtonProps) => (
  <button className={`${button.main} ${className || ''}`} type='button' onClick={onClick}>
    {label}
  </button>
)

export default Button
