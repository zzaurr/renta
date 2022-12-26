import { Outlet } from "react-router-dom"
import header from './header.module.scss'

export const HeaderBlog = () => {

return (
  <>
    <div className={header.header}>
      <div className={header.title}>
        <h1>Blog page</h1>
      </div>
    </div>
    <div>
      <Outlet />
    </div>
    </>
)
}