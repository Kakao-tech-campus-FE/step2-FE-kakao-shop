import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header /> // GNB가 포함된 헤더
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
