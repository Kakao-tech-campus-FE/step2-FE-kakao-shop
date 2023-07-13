import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header";
import Footer from "../components/atoms/Footer";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../store/slices/userSlice";

const MainLayout = () => {
  const isLogined = useSelector((state) => state.user.isLogined);
  const [text, setText] = useState(() => {
    if (isLogined) {
      return "로그아웃";
    } else {
      return "로그인";
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (isLogined) => {
    console.log(isLogined);
    if (isLogined === "로그인") {
      setText("로그아웃");
      dispatch(
        setUserInfo({
          isLogined: false,
        })
      );
    } else {
      setText("로그인");
      navigate("/login");
    }
  };

  return (
    <>
      {/* 로그인, 장바구니, 메인 로고 */}
      <Header
        onClick={() => {
          handleLogin(isLogined);
        }}
        text={text}
      >
        GNB 영역
      </Header>
      {/* 콘텐츠 영역*/}
      <Outlet />
      {/* 푸터 영역 */}
      <Footer />
    </>
  );
};

export default MainLayout;
