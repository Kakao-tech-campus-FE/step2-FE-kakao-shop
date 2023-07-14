import React from "react";
import logoImage from "../../assets/logoKakao.png";
import NavBar from "../organisms/NavBar";
import LinkedIcon from "../molecules/LinkedIcon";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-30">
      <nav className="flex justify-between items-center m-auto p-2 max-w-7xl h-20">
        <LinkedIcon to="/" alt="kakao 쇼핑하기" width="w-logo">
          {logoImage}
        </LinkedIcon>
        <NavBar />
      </nav>
    </header>
  );
}
