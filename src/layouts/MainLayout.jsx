import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import Footer from "../components/atoms/Footer";

const MainLayout = () => {
  return (
    <>
      {/* 로그인버튼, 장바구니 버튼, 메인로고 */}
      <GNB />
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <Outlet />
      {/* 푸터영역 */}
      <Footer />
    </>
  );
};

export default MainLayout;
