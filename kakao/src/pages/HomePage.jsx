import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/HomePage.css";
import { useSelector, useDispatch } from "react-redux";
import { clearEmail } from "../store/slices/userSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  const handleLogoutClick = () => {
    dispatch(clearEmail());

    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   dispatch(setEmail({ eamil: email }));
  });

  return (
    <div className="HomePage">
      <header className="header">
        <div className="inner">
          <h1>HomePage</h1>
          {email ? (
            <div className="goAccount">
              <button onClick={handleLogoutClick}>로그아웃</button>
            </div>
          ) : (
            <div className="goAccount">
              <button onClick={handleLoginClick}>로그인</button>
              <button onClick={handleRegisterClick}>회원가입</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default HomePage;
