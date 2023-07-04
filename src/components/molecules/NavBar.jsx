import React from "react";
import cartImage from "../../assets/cart.png";
import Button from "../atoms/Button";
import LinkedIcon from "./LinkedIcon";

export default function NavBar() {
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
      >
        로그인
      </Button>
    </nav>
  );
}
