import GNB from "../components/organisms/GNB";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <GNB /> {/* 로그인, 장바구니, 메인 로고 */}
            <Outlet /> {/* 콘텐츠 : 페이지마다 변경되는 영역 */}
            {/* 푸터 영역 */}
        </>
    );
};

export default MainLayout;
