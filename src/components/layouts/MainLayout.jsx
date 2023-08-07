import { Outlet } from "react-router-dom";
import GlobalNavBar from "../organisms/GlobalNavBar";
import Footer from "../atoms/Footer";

const MainLayout = () => {
  return (
    <>
      <GlobalNavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
