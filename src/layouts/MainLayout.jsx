// Outlet을 통해 레이아웃 관리
import { Outlet } from "react-router-dom";
import GNB from "../components/organisms/GNB";
import { useDispatch } from "react-redux";
import { getUserCookie } from "../services/cookie";
import { setUserInfo } from "../store/slices/userSlice";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import Footer from "../components/atoms/Footer";

const MainLayout = () => {
  // 렌더링 될 때, 쿠키에 저장된 사용자 정보를 리덕스 스토어에 가져와서 저장
  const dispatch = useDispatch();
  dispatch(setUserInfo(getUserCookie()));
  return (
    <Suspense fallback={<Loader />}>
      <div>
        {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
        <GNB />
        {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
        <div className="h-20"></div>
        <Outlet />
        <Footer />
      </div>
    </Suspense>
  );
};
export default MainLayout;
