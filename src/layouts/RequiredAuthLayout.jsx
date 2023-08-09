import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import { staticServerUri } from "../constants/serverUri";

export default function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate(staticServerUri + "/login", { replace: true });
    }
  }, [navigate]);
  return (
    <>
      <GNB />
      <Outlet />
      {/* 푸터 */}
    </>
  );
}
