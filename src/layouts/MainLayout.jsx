import { Outlet } from "react-router-dom";
import GNB from "../component/organisms/GNB";
import { Suspense } from "react";
import Skeleton from "../component/atoms/Skeleton";

const MainLayout = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <div>
        {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
        <GNB />
        {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
        <div className="h-20"></div>
        <Outlet />
        {/* 푸터 영역 */}
      </div>
    </Suspense>
  );
};
export default MainLayout;