import React from "react";
import SignupForm from "../components/organisms/SignupForm";
import logoText from "../assets/logoKakaoText.png";
import LinkedIcon from "../components/molecules/LinkedIcon";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center py-20 w-full h-full overflow-y-auto">
      <LinkedIcon to="/" alt="kakao" width="w-kakaoTest">
        {logoText}
      </LinkedIcon>
      <SignupForm />
    </div>
  );
}
