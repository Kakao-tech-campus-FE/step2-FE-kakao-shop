import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RequiredAuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/loginpage");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default RequiredAuthLayout;
