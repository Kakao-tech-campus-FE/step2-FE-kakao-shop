import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbarMenu" to={"/carousel"}>
        Carousel
      </Link>
      <Link className="navbarMenu" to={"/checklist"}>
        Checklist
      </Link>
      <Link className="navbarMenu" to={"/radiobutton"}>
        RadioButton
      </Link>
      <Link className="navbarMenu" to={"/toast"}>
        Toast
      </Link>
      <Link className="navbarMenu" to={"/togglebutton"}>
        ToggleButton
      </Link>
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
