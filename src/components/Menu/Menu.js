import menu from './Menu.module.scss'
import avatar from './images.png'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOutR } from '../../store/slices/auth'

export const Menu = () => {

    const dispatch = useDispatch()

    const logOut = () => {
       dispatch(logOutR())
    }
    return (
    <aside>
        <div className='userLogIn'>
            <button className='exit' onClick={logOut}>Выход</button>
            <img className={menu.avatar} src={avatar} alt='avatar' />
            <h4 className='userName'>name</h4>

        </div>
        <input placeholder='Найти'></input>
        <nav className='links'>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/favorite'>
                <span>favorite</span>
            </NavLink>
            <NavLink to='/favorite'>Settings</NavLink>
        </nav>
    </aside>
    )
}

