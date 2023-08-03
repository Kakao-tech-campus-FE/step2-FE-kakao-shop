import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/atoms/Header";
import Footer from "../components/atoms/Footer";

const staticServerUri = process.env.REACT_APP_PATH || "";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate(staticServerUri + "/login");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RequiredAuthLayout;
