
import { Outlet } from 'react-router-dom'
import GNB from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';
const MainLayout = () => {
    return (
        <div>
            {/*로그인 버튼, 장바구니, 메인 로고*/}
            <GNB></GNB>
            {/*콘텐츠 영역 : 페이지마다 달라지는 영역*/}
            <Outlet></Outlet>
            {/*푸터 영역*/}

        </div>
    );
};

export default MainLayout;

