import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderForm from "../components/organisms/HeaderForm";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <HeaderForm />
      <Outlet />
    </>
  );
};

export default RequiredAuthLayout;
