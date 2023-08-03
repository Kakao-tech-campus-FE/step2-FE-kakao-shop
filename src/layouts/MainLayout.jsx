import GNB from "../components/atoms/GNB"
import Footer from "../components/atoms/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () =>{
  return (
    <>
      {/* 로그인, 장바구니, 메인 로 */}
      <GNB />
      {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
      <Outlet />
      {/* 푸터 영역 */}
      <Footer/>
    </>
  )
}

export default MainLayout