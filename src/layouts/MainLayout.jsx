import GNB from "../components/atoms/GNB";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <GNB />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
