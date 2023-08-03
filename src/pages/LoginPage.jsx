import React from "react";
import LoginForm from "../components/organisms/Auth/LoginForm";
import LinkedIcon from "../components/molecules/Common/LinkedIcon";
import logoText from "../assets/logoKakaoText.png";

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
