import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Carousel from '../components/Carousel';

const MainLayout = () => {
  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
      <header>
      <GNB />
      </header>
      
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <main>
        <Outlet />
      </main>
      {/* 푸터 영역 */}
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;