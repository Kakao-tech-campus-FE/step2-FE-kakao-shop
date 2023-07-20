import React from 'react'
import { Outlet } from 'react-router-dom'
import GNB from '../components/organisms/GNB'

function MainLayout() {
  return (
    <>
      {/* 로그인버튼, 장바구니버튼, 메인 로고들이 있는 헤더 영역 */}
      <GNB/>
      {/* 콘텐츠 영역: 페이지마다 달라짐 */}
      <Outlet/> 
      {/* 푸터 영역 */}
    </>
  )
}

export default MainLayout