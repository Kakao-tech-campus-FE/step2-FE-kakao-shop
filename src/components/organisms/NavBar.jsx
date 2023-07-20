import React from "react";
import cartImage from "../../assets/cart.png";
import Button from "../atoms/Button";
import LinkedIcon from "../molecules/LinkedIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { removeCookie } from "../../utils/cookie";
import Container from "../atoms/Container";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);

  const handleLoginClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      removeCookie("accessToken");
      dispatch(setUser({ isLoggedIn: false }));
    }
  };

  return (
    <Container className="flex items-center">
      <LinkedIcon to="/cart" alt="장바구니" width="w-icon">
        {cartImage}
      </LinkedIcon>
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
