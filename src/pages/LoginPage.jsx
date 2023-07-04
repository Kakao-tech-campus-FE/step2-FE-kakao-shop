import React from "react";
import LoginForm from "../components/organisms/LoginForm";
import logoText from "../assets/logoKakaoText.png";
import LinkedIcon from "../components/molecules/LinkedIcon";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center py-20 w-full h-full">
      <LinkedIcon to="/" alt="kakao" width="w-kakaoTest">
        {logoText}
      </LinkedIcon>
      <LoginForm />
    </div>
  );
}
