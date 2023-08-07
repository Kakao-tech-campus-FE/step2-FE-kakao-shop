import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const loginState = useSelector((state) => state.login);
  return loginState.islogin 
    ? <Outlet /> 
    : <Navigate to="/login" />;
};

export default PrivateRoute;
