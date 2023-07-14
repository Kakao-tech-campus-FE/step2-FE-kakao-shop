import GlobalNavigationBar from "@components/organisms/GlobalNavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <GlobalNavigationBar />
      <Outlet />
    </div>
  );
};

export default Layout;
