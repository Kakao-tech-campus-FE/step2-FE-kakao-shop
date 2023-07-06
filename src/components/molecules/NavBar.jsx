import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button";
import { setEmail } from "../../store/slices/userSlice";

const NavBar = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const setLoginStateNull = () => {
    dispatch(setEmail({ email: null }));
  };

  return (
    <div className="navbar">
      <Link className="navbarMenu" to={"/"}>
        Main
      </Link>
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

      {(() => {
        if (email) {
          return (
            <>
              <span>{email}</span>
              <Button children="로그아웃" onClick={setLoginStateNull}></Button>
            </>
          );
        } else {
          return (
            <>
              <Link className="navbarMenu" to={"/login"}>
                로그인
              </Link>
              <Link className="navbarMenu" to={"/register"}>
                회원가입
              </Link>
            </>
          );
        }
      })()}
    </div>
  );
};

export default NavBar;
