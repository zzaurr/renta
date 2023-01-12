import React from "react"
import { Link } from "react-router-dom"
import button from './button.module.scss'

type IconLinkProps = {
  to?: String,
  className?: String,
  onClick: () => void,
  icon: 'heart' | 'isLike',
}

const IconLink = ({to, className, onClick, icon}: IconLinkProps) => (
  <Link
    to={''}
    title={to?.replace(/[.-/_]/g, ' ')}
    className={`${button.icon} ${button[icon]} ${className || ''}`}
    onClick={onClick}
  />
)

export default IconLink
