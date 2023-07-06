import React, { useEffect } from "react";
import cartImage from "../../assets/cart.png";
import Button from "../atoms/Button";
import LinkedIcon from "./LinkedIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { useCookies } from "react-cookie";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.email);
  const [cookies, , removeCookie] = useCookies(["user"]);

  const handleLoginClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      removeCookie("user");
      dispatch(setEmail({ email: null }));
    }
  };

  useEffect(() => {
    dispatch(setEmail({ email: cookies.user }));
  }, [cookies.user, dispatch]);

  return (
    <nav className="flex items-center">
      <LinkedIcon to="/" alt="mycart" width="w-icon">
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
    </nav>
  );
}
