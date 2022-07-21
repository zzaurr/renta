import React from 'react'
import { NavLink } from 'react-router-dom'

export const NoMatch = () => {
  return (
    <>
    <div>
        Страница не найдена
    </div>
      <nav className='links'>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/favorite'>
          <span>favorite</span>
      </NavLink>
      <NavLink to='/favorite'>Settings</NavLink>
  </nav>
  </>

  )
}
