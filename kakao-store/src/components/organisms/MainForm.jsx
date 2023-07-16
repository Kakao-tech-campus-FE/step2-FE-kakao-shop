import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, clearTimeoutId } from "../../store/slices/userSlice";
import Loginbox from "../atoms/Loginbox";

/**
 * 메인 폼 컴포넌트
 *
 * @returns {JSX.Element} - 메인 폼
 */

const MainForm = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const timeoutId = useSelector((state) => state.user.clearTimeoutId);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    dispatch(logout());
    if (timeoutId) {
      clearTimeout(timeoutId);
      dispatch(clearTimeoutId());
    }
  };

  return <Loginbox email={email} password={password} onClick={handleLogout} />;
};

export default MainForm;
