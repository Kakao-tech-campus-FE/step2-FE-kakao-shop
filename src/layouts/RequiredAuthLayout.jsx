import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "../components/common/atoms/Footer";
import AuthNavBar from "../components/common/molecules/AuthNavBar";

export default function RequiredAuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
      <AuthNavBar />
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <div className=" box-border h-12 w-full"></div>
      <Outlet />
      {/* Footer 영역 */}
      <Footer />
    </>
  );
}
