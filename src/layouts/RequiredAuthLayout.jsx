import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setUserInfo } from "../store/slices/userSlice";
import { getUserCookie } from "../services/cookie";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setUserInfo(getUserCookie()));
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo.token === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default RequiredAuthLayout;
