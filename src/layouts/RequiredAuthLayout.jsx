import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../components/organisms/GNB";
import Footer from "../components/atoms/Footer";
import { getUserCookie } from "../services/cookie";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  //const userInfo = useSelector((state) => state.user);
  const userInfo = getUserCookie();

  useEffect(() => {
    console.log(userInfo.token);
    if (!userInfo.token) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate, userInfo.token]);

  return (
    <>
      <GNB />
      <div className="h-20" />
      <Outlet />
      <Footer />
    </>
  );
};
export default RequiredAuthLayout;
