import React from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button"; // eslint-disable-line no-unused-vars
import { setEmail } from "../../store/slices/userSlice";
import Timer from "./Timer";
const NavBar = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const timeout = 1000009;
  const setLoginStateNull = () => { // eslint-disable-line no-unused-vars
    dispatch(setEmail({ email: null, loggedInAt: null }));
    localStorage.removeItem("token");
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
              <Timer timeout={timeout}></Timer>
              <span> {email} </span>
              {/* <Button children="로그아웃" onClick={setLoginStateNull}></Button> */}
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