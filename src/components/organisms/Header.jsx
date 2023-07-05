import React from "react";
import logoImage from "../../assets/logoKakao.png";
import NavBar from "../molecules/NavBar";
import LinkedIcon from "../molecules/LinkedIcon";
import Container from "../atoms/Container";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200">
      <Container className="flex justify-between items-center m-auto p-2 max-w-7xl h-20">
        <LinkedIcon to="/" alt="kakao 쇼핑하기" width="w-logo">
          {logoImage}
        </LinkedIcon>
        <NavBar />
      </Container>
    </header>
  );
}
