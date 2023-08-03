import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../atoms/Button";
import LinkedIcon from "../../molecules/Common/LinkedIcon";
import Container from "../../atoms/Container";
import CartStatus from "../../molecules/Header/CartStatus";
import { setUser } from "../../../store/slices/userSlice";
import { removeCookie } from "../../../utils/cookie";
import cartImage from "../../../assets/cart.png";

export default function NavBar({ modalRef }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);

  const handleLoginClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      removeCookie("accessToken");
      dispatch(setUser({ isLoggedIn: false }));
      navigate("/");
    }
  };
  const handleCartClick = (e) => {
    if (!user) {
      e.preventDefault();
      modalRef.current.showModal();
    }
  };

  return (
    <Container className="relative flex items-center">
      <LinkedIcon
        to="/cart"
        alt="장바구니"
        width="w-icon"
        onClick={handleCartClick}
      >
        {cartImage}
      </LinkedIcon>
      {user && <CartStatus />}
      <Button
        margin="ml-4"
        padding="px-4 py-1"
        color="transparent"
        before={true}
        onClick={handleLoginClick}
      >
        {user ? "로그아웃" : "로그인"}
      </Button>
    </Container>
  );
}
