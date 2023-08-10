import GNB from '../components/molecules/GNB';
import Footer from '../components/molecules/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="w-full h-full min-h-screen flex-col justify-center">
            {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
            <GNB />
            {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
            <Outlet />
            {/* 푸터 영역 */}
            <Footer />
        </div>
    );
};

export default MainLayout;
