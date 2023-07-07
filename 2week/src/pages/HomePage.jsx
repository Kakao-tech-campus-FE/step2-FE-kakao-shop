import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">홈페이지</h1>
      <Link to="/login" className="home-link">로그인</Link>
      <Link to="/signup" className="home-link">회원가입</Link>
    </div>
  );
};

export default HomePage;
