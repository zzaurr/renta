import { Link } from 'react-router-dom'
import header from './header.module.scss'

const Header = () => (
  <div className={header.header}>
    <Link to='/' className={header.logo}>
      Header
    </Link>
    <Link to='blog' >
      Blog
    </Link>
    <Link to="new" className={header.new}>
      New Post
    </Link>
  </div>
)

export default Header
