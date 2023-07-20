import React from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import logoKakao from "../../assets/icons/logoKakao.png";
import { LogOut } from "../../store/slices/userSlice";
import cart from "../../assets/icons/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

/**
 * 글로벌네비게이션바
 * @ Home Logo + 회원가입/로그인 버튼
 * @returns GNB
 */
export default function GlobalNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.login.isLogged);
  const handleLoginStatus = () => {
    if (isLogged) {
      dispatch(LogOut());
    } else {
      navigate("/login");
    }
  };

  return (
    <Container className=" fixed inset-x-0 flex items-center place-content-between border-solid px-16 border-y-1 border-x-0 border-slate-300 bg-white h-20 top-0 z-10">
      <Link to="/">
        <Logo src={logoKakao} alt="logoKakao" className="w-28" />
      </Link>
      <Container className="flex items-center">
        <Link to="/cart">
          <Logo src={cart} alt="cart" className="w-8" />
        </Link>
        {!isLogged && (
          <Button
            onClick={() => navigate("/signup")}
            className=" cursor-pointer border-0 bg-white border-l-2 "
          >
            회원가입
          </Button>
        )}
        <Button
          onClick={handleLoginStatus}
          className=" cursor-pointer border-0 bg-white border-l-2 "
        >
          {isLogged ? "로그아웃" : "로그인"}
        </Button>
      </Container>
    </Container>
  );
}
