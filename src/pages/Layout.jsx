import { Outlet } from "react-router-dom";
import HeaderForm from "../components/organisms/HeaderForm";

/** 레이아웃
 *
 * @return {JSX.Element}
 */
const Layout = () => {
  return (
    <div>
      <HeaderForm />
      <Outlet />
    </div>
  );
};

export default Layout;
