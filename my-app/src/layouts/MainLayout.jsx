import { Outlet } from "react-router-dom";
import Header from "../components/molecules/Header";
import Footer from "../components/atoms/Footer";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../store/slices/userSlice";
import { FaRegUser } from "react-icons/fa6";

const MainLayout = () => {
	const staticServerUrl = process.env.REACT_APP_PATH || "";
  const isLogined = useSelector((state) => state.user.isLogined);
  const [text, setText] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isLogined === true) {
      dispatch(
        setUserInfo({
          isLogined: false,
        })
      );
      navigate(staticServerUrl + "/login");
    } else {
      setText("로그아웃");
      navigate(staticServerUrl + "/login");
    }
  };

  useEffect(() => {
    isLogined ? setText(<FaRegUser size="26" />) : setText("로그인");
  }, [isLogined]);

  return (
    <>
      {/* 로그인, 장바구니, 메인 로고 */}
      <Header
        onClick={() => {
          handleLogin();
        }}
        text={text}
      />

      {/* 콘텐츠 영역*/}
      <Outlet />
      {/* 푸터 영역 */}
      <Footer />
    </>
  );
};

export default MainLayout;
