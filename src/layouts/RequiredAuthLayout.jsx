import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../components/organisms/GNB";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user);

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
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default RequiredAuthLayout;
