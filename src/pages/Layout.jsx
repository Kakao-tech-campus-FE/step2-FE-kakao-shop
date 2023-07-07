import { Outlet } from "react-router-dom";
import HeaderForm from "../components/organisms/HeaderForm";

const Layout = () => {
  return (
    <div>
      <HeaderForm />
      <Outlet />
    </div>
  );
};

export default Layout;
