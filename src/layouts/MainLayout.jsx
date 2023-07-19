import GNB from "../components/atoms/GNB";
import { Outlet } from "react-router-dom";
import Footer from "../components/atoms/Footer";

const MainLayout = () => {
  return (
    <>
      <GNB />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
