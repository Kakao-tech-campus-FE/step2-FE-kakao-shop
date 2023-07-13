import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";

const MainLayout = () => {
  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로그 */}
      <GNB />
      {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
      <Outlet />
    </>
  );
};

export default MainLayout;
