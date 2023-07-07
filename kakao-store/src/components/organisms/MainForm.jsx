import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";
import Loginbox from "../atoms/Loginbox";

const MainForm = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    dispatch(logout());
  };

  return <Loginbox email={email} password={password} onClick={handleLogout} />;
};

export default MainForm;
