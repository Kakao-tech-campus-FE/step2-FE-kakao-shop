import React, { useRef } from "react";
import NavBar from "../../organisms/Header/NavBar";
import LinkedIcon from "../../molecules/Common/LinkedIcon";
import LoginModal from "../../molecules/Auth/LoginModal";
import logoImage from "../../../assets/logoKakao.png";

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
