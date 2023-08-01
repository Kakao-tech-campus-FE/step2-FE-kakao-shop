import React from "react";
import GlobalNavBar from "../components/common/molecules/GlobalNavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/atoms/Footer";

export default function MainLayout() {
  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
      <GlobalNavBar />
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <div className=" w-full h-20 box-border"></div>
      <Outlet />
      {/* Footer 영역 */}
      <Footer />
    </>
  );
}

// ⭐️ MainLayout 컴포넌트
// - 페이지마다 공통적으로 들어가는 컴포넌트를 렌더링하는 곳

// ⭐️ Outlet 컴포넌트
// - 페이지마다 달라질 수 있는 동적인 컨텐츠를 렌더링하는 곳
// - 중첩된 라우터 구조에서 부모 컴포넌트에서 하위 경로에 매칭된 컴포넌트를 렌더링할 수 있다.
