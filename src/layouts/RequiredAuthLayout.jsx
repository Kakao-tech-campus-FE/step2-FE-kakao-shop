import Footer from "../components/atoms/Footer";
import GNB from "../components/atoms/GNB";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);
  // carts로 이동하고, login으로 이동하면서 alert 창이 두번 뜨는 문제

  return (
    <>
      <GNB />
      <Outlet />
      <Footer />
    </>
  );
}

export default RequiredAuthLayout;
