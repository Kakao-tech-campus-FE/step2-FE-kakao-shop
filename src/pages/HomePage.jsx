import React, { useEffect } from "react";
import GlobalNavBar from "../components/molecules/GlobalNavBar";
import { useDispatch } from "react-redux";
import { LogOut } from "../store/slices/userSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const checkLoginStatus = () => {
    const expirationTime = localStorage.getItem("loginExpirationTime");
    // 로그인이 기록된 상태
    if (expirationTime) {
      const currentTime = new Date().getTime();
      const expirationTimestamp = parseInt(expirationTime);
      // 로그인이 만료된 경우
      if (currentTime > expirationTimestamp) {
        dispatch(LogOut()); // 로그아웃 상태로 변경
        localStorage.removeItem("loginExpirationTime"); // 로컬스토리지 삭제
      }
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return <GlobalNavBar />;
}
