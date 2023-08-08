import { Outlet } from "react-router-dom";
import Sidebar from "../components/molecules/Sidebar";
import Footer from "../components/molecules/Footer";

const MainLayout = () => {
  return (
    <div className="flex justify-center">
      <header>
        <Sidebar />
      </header>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
      {/* <header className="flex justify-center fixed z-50 bg-white p-3 w-full">
        <GNB />
      </header> */}

      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <main className="ml-64">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
