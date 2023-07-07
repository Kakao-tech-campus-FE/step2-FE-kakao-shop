import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";

const MainForm = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    dispatch(logout());
  };

  return (
    <div>
      <div>Email: {email}</div>
      <div>Password: {password}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainForm;
