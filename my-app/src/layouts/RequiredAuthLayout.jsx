import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/molecules/Header";
import Footer from "../components/atoms/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RequiredAuthLayout;
