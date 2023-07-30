import SignInForm from "../organisms/SignInForm";

const LoginFooter = () => {
  return (
    <div className="footer flex gap-2 text-xs text-gray-500 justify-center">
      <span>이용약관</span>
      <span className="font-extrabold">개인 정보 처리방침</span>
      <span>운영정책</span>
      <span>고객센터</span>
      <span>공지사항</span>
      {/* 시간되면 언어 바꿀 수 있도록 수정 */}
      <span>한국어</span>
    </div>
  );
};

const SignInSection = () => {
  return (
    <div className="container flex flex-col items-center">
      <img
        className="border-0 w-20 h-16"
        src="https://accounts.kakaocdn.net/images/pc/logo_kakao.png"
        alt="kakao-login-logo"
      />
      <SignInForm />
      <LoginFooter />
    </div>
  );
};

export default SignInSection;
