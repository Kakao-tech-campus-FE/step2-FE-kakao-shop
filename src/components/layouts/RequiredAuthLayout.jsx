import { useEffect } from "react";
import Footer from "../atoms/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../molecules/GNB";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <GNB />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RequiredAuthLayout;