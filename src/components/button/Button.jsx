import button from './button.module.scss'

const Button = ({ className, onClick, label }) => (
  <button className={`${button.main} ${className || ''}`} type='button' onClick={onClick}>
    {label}
  </button>
)

export default Button
