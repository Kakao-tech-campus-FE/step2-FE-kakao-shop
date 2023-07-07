import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  return (
    <div className="HomePage">
      <header className="header">
        <div className="inner">
          <h1>HomePage</h1>
          <div className="goAccount">
            <button onClick={handleLoginClick}>로그인</button>
            <button onClick={handleRegisterClick}>회원가입</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
