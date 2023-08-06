import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header"; // eslint-disable-line no-unused-vars
import Footer from "../components/atoms/Footer"; // eslint-disable-line no-unused-vars
import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import GNB from "../components/atoms/GNB"; // eslint-disable-line no-unused-vars
import MainProductTemplate from "../components/templates2/MainProductTemplate"; // eslint-disable-line no-unused-vars

const MainLayout = () => {
  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고 */}
      <GNB />
      {/* 콘텐츠 영역: 페이지마다 달라지는 영역 */}
      <Outlet />
    </>
  );
};

// 로그인할 때 email redux state에는 저장이 된 상태이며,
// 새로 고침 했을 때 redux state가 초기화, token만 있어야 함 !
export default MainLayout;

//   return (
//     <>
//       {/* 로그인, 장바구니, 메인 로고 */}
//       <Header
//       />

//       {/* 콘텐츠 영역*/}
//       <Outlet />
//       {/* 푸터 영역 */}
//       {/* <Footer /> */}
//       <Footer />
//     </>
//   );
// };
// export default MainLayout;