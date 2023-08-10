import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/atoms/Footer";
import { getCookie } from "../storage/Cookie";
import { defaultToast } from "../utils/swal";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  const userEmail = getCookie("email");

  useEffect(() => {
    if (!userEmail) {
      defaultToast("로그인이 필요한 기능입니다");
      navigate("/login");
    }
  }, [userEmail, navigate]);

  return (
    <>
      <Header />
      {/* 로그인 필요한 서비스가 공통적으로 가지는 레이아웃 */}
      <div className="bg-gray-50 pb-6 pt-1 mt-14 h-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RequiredAuthLayout;
