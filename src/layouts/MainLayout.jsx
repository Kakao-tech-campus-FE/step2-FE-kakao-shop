import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";

const MainLayout = () => {
    return (
        <>
            {/* 로그인, 장바구니, 메인 로고 등이 들어가는 GNB 컴포넌트 */}
            <GNB />
            {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
            <Outlet />
            {/* 푸터 영역 */}
        </>
    );
};

export default MainLayout;