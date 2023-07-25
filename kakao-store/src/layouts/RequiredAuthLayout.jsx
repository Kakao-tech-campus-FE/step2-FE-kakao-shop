import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCookie } from "../storage/Cookie";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie("token")) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RequiredAuthLayout;
