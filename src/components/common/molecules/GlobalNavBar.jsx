import React from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import logoKakao from "../../../assets/icons/logoKakao.png";
import { LogOut } from "../../../store/slices/userSlice";
import cart from "../../../assets/icons/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function GlobalNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.login.isLogged);
  const cartNum = useSelector((state) => state.cart.cartNum);
  const handleLoginStatus = () => {
    if (isLogged) {
      dispatch(LogOut());
    } else {
      navigate("/login");
    }
  };

  return (
    <Container className=" fixed w-full min-w-[1280px] flex items-center place-content-between border-solid px-16 border-y-1 border-x-0 border-slate-300 bg-white h-20 top-0 z-10">
      <Link to="/">
        <Logo src={logoKakao} alt="KakaoLogo" className="w-28" />
      </Link>
      <Container className="flex items-center">
        <Link to="/carts">
          <div className=" relative ">
            <Logo src={cart} alt="cartIcon" className="w-9 mr-4" />
            {/* 로그인 중 && 장바구니에 물건이 있을 때 */}
            {isLogged && cartNum > 0 && (
              <div className="absolute right-4 top-0 bg-red-500 text-white font-bold rounded-full text-xs w-4 text-center">
                {cartNum}
              </div>
            )}
          </div>
        </Link>
        <Button
          onClick={handleLoginStatus}
          className=" cursor-pointer border-0 bg-white border-l-[1px] w-20"
        >
          {isLogged ? "로그아웃" : "로그인"}
        </Button>
      </Container>
    </Container>
  );
}
