import LoginForm from "../components/organisms/LoginForm";

/**
 * 로그인 페이지
 *
 * @returns {JSX.Element} - 로그인 페이지의 JSX 요소
 */
const LoginPage = () => {
  return (
    <div>
      <img
        src="/logoKakaoText.png"
        alt="kakao-shopping"
        className="w-32 mx-auto mt-32 mb-10"
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
