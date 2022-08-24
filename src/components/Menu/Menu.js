import menu from './Menu.module.scss'
import avatar from './images.png'
import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { logOutR } from '../../store/slices/auth'
import { ReactComponent as SearchIcon } from './search.svg';


export const Menu = () => {

// const dispatch = useDispatch()

// const logOut = () => {
//     dispatch(logOutR())
// }
return (
<aside>
    <div className={menu.userLogIn}>
        {/* <button className='exit' onClick={logOut}>Выход</button> */}
        <img className={menu.avatar} src={avatar} alt='avatar' />
        <h4 className={menu.userName}>YOUR`S` BLOG</h4>
    </div>
    <section className={menu.sidebar_content}>
        <div className={menu.searchForm}>
            <form>
                <p>Search</p>
                <input placeholder='' type='text'></input>
                <button type='submit'>
                    <SearchIcon/>
                </button>

            </form>
        </div>
        <div className={menu.subscribeForm}>
            <form>
                <p>Subscribe</p>
                <input placeholder='example@email.com' type='email'></input>
                <button>
                    <p>Sign Up</p>
                </button>
            </form>
        </div>
        <nav className={menu.links}>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/favorite'>Favorite</NavLink>
            <NavLink to='/favorite'>Settings</NavLink>
        </nav>

        <nav className={menu.links}>
            <h3>Best of the blog</h3>
            <NavLink to=''>Story of the week</NavLink>
            <NavLink to=''>Top 100</NavLink>
            <NavLink to=''>Popular posts</NavLink>
        </nav>

        <nav className={menu.links}>
            <h3>Connect</h3>
            <NavLink to=''>News and updates</NavLink>
            <NavLink to=''>Social media</NavLink>
        </nav>
    </section>

</aside>
)
}

