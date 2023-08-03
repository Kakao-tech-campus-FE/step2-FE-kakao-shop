import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import { useEffect } from "react";
import { setUser, setToken, clearUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";


const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      const expirationTime = user.expirationTime;

      // expirationTime이 되지 않았을 경우 새로고침 시 로그인 유지, 넘었다면 로그아웃
      if (expirationTime && Date.now() < parseInt(expirationTime, 10)) {
        dispatch(setUser(user));
        dispatch(setToken(token));
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch(clearUser());
      }
    }
  }, []);
  return (
    <>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로그 */}
      <GNB />
      {/* 콘텐츠 영역 : 페이지마다 달라지는 영역 */}
      <Outlet />
    </>
  );
};

export default MainLayout;
