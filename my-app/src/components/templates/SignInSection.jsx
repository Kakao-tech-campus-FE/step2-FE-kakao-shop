import LoginFooter from "../atoms/LoginFooter";
import SignInForm from "../organisms/SignInForm";

const SignInSection = () => {
  return (
    <div className="container flex flex-col items-center gap-6 mt-8">
      <div className="kakao-login-logo">
        <img
          className="border-0 w-24 h-20"
          src="https://accounts.kakaocdn.net/images/pc/logo_kakao.png"
          alt="kakao-login-logo"
        />
      </div>
      <div className="main-content w-[100%]">
        <SignInForm />
      </div>
      <LoginFooter />
    </div>
  );
};

export default SignInSection;
