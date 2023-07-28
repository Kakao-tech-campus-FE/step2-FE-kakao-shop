import { Outlet } from "react-router-dom";
import SlimGNB from "../components/atoms/SlimGNB";
import Footer from "../components/atoms/Footer";
import Loader from "../components/atoms/Loader";
import { Suspense } from "react";

const GeneralLayout = () => {
    return (
        <>
            {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
            <SlimGNB />
            {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            {/* 푸터 영역 */}
            <Footer />
        </>
    )
}

export default GeneralLayout;