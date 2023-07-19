import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import MainProductTemplate from "../components/oTemplates/MainProductTemplate";

const MainLayout = () => {
  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
      <GNB />
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <Outlet />
    </>
  );
};

// 로그인할 때 email redux state에는 저장이 된 상태
// 새로 고침을 하면 redux state가 초기화, token만 있음
export default MainLayout;
