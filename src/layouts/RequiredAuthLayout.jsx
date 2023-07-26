import GNB from "../components/atoms/GNB";
import Footer from "../components/atoms/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as paths from "../constants/urls";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate(paths.LOGIN_PATH);
    }
  }, [navigate]);

  return (
    <>
      <GNB />
      <Outlet />
      <Footer />
    </>
  );
}

export default RequiredAuthLayout;
