import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";
import layout from './layout.module.scss'

const MenuLauout = () => (
  <main className={layout.main}>
    <div className={layout.menu} >
      <Menu />
    </div>
    <div className={layout.content}>
      <Outlet />
    </div>
  </main>
)

export default MenuLauout
