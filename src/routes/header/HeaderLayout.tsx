import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const HeadeerLayout = () => (
  <div>
    <Header />
    <div>
      <Outlet />
    </div>
  </div>
)

export default HeadeerLayout
