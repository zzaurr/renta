import React from "react"
import { Link } from "react-router-dom"
import button from './button.module.scss'

const IconLink = ({to, className, onClick, icon}) => (
  <Link
    to={''}
    title={to.replace(/[.-/_]/g, ' ')}
    className={`${button.icon} ${button[icon]} ${className || ''}`}
    onClick={onClick}
  />
)

export default IconLink
