import GNB from '../components/molecules/GNB';
import Footer from '../components/molecules/Footer';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const MainLayout = () => {
    return (
        <Layout>
            {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
            <GNB />
            {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
            <Outlet />
            {/* 푸터 영역 */}
            <Footer />
        </Layout>
    );
};

const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default MainLayout;
