import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import Footer from "../components/atoms/Footer";

const MainLayout = () => {
  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
      <GNB />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
