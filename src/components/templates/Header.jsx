import React, { useRef } from "react";
import logoImage from "../../assets/logoKakao.png";
import NavBar from "../organisms/NavBar";
import LinkedIcon from "../molecules/LinkedIcon";
import LoginModal from "../molecules/LoginModal";

export default function Header() {
  const loginModalRef = useRef(null);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-30">
      <nav className="flex justify-between items-center m-auto p-2 w-inner h-20">
        <LinkedIcon to="/" alt="kakao 쇼핑하기" width="w-logo">
          {logoImage}
        </LinkedIcon>
        <NavBar modalRef={loginModalRef} />
        <LoginModal ref={loginModalRef} />
      </nav>
    </header>
  );
}
