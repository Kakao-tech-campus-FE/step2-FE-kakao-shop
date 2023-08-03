import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../components/organisms/GNB";
import Footer from "../components/atoms/Footer";
import { getUserCookie } from "../services/cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../store/slices/userSlice";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  // 렌더링 될 때, 쿠키에 저장된 사용자 정보를 리덕스 스토어에 가져와서 저장
  const dispatch = useDispatch();
  dispatch(setUserInfo(getUserCookie()));
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
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
