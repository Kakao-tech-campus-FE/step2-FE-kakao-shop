import React from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import logoKakao from "../../../assets/icons/logoKakao.png";
import { LogOut } from "../../../store/slices/userSlice";
import cartIcon from "../../../assets/icons/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function AuthNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.login.isLogged);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const handleLoginStatus = () => {
    if (isLogged) {
      dispatch(LogOut());
    } else {
      navigate("/login");
    }
  };

  return (
    <Container className=" fixed w-full min-w-[1280px] flex items-center place-content-between border-solid px-10 border-y-1 border-x-0 border-slate-300 bg-white h-12 top-0 z-10 box-border">
      <Link to="/">
        <Logo src={logoKakao} alt="KakaoLogo" className="w-24" />
      </Link>
      <Container className="flex items-center">
        <Link to="/carts">
          <div className=" relative ">
            <Logo src={cartIcon} alt="cartIcon" className="w-9 mr-4" />
            {/* 로그인 중 && 장바구니에 물건이 있을 때 */}
            {isLogged && cartCount > 0 && (
              <div className="absolute right-4 top-0 bg-red-500 text-white font-bold rounded-full text-xs w-4 text-center">
                {cartCount}
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
