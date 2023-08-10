import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/atoms/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <div className="mt-14">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
