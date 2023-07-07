// src/pages/MainPage.jsx

import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setEmail, setLoginTime } from "../store/slices/userSlice";
import Title from "../components/atoms/Title";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("password");
    localStorage.removeItem("loginTime");
  }, []);


  // 일정 시간 후 자동 로그아웃 
  const checkLogoutTime = useCallback(() => {
    const logoutTime = 1 * 60 * 60 * 24 * 1000; // 로그인 유지 기간 1일로 설정 (밀리초 단위)
    const currentTime = new Date().getTime();
    const storedLoginTime = localStorage.getItem("loginTime");

    if (storedLoginTime && currentTime - parseInt(storedLoginTime) >= logoutTime) {
      dispatch(logoutUser());
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email || password) {
      dispatch(setEmail({ email }));
    }
  }, [dispatch, isAuthenticated, navigate]);


  useEffect(() => {
    dispatch(setLoginTime());
    const logoutTimer = setInterval(() => {
      checkLogoutTime();
    }, 1000);

    return () => {
      clearInterval(logoutTimer);
    };
  }, [dispatch, checkLogoutTime]);

  return (
    <>
      <Navigation isLoggedIn={isAuthenticated} handleLogout={handleLogout} />
      <Title>
        <br />
        &nbsp; 메인 페이지
      </Title>
    </>
  );
};

export default MainPage;
