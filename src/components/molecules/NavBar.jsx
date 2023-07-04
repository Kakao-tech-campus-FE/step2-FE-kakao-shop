import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbarMenu" to={"/login"}>
        로그인
      </Link>
      <Link className="navbarMenu" to={"/register"}>
        회원가입
      </Link>
    </div>
  );
};

export default NavBar;
