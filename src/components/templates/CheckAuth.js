import { Navigate, Outlet } from "react-router-dom";

export default function CheckAuth() {
  return !window.localStorage.getItem("token") ? (
    window.confirm("로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?") ? (
      <Navigate to="/login" />
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Outlet />
  );
}
