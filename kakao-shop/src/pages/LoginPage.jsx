import Link from "../components/atoms/Link";
import Photo from "../components/atoms/Photo";
import LoginForm from "../components/organisms/LoginForm";

/**
 * 로그인 페이지
 *
 * @returns {JSX.Element} - 로그인 페이지의 JSX 요소
 */
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="mt-32 mb-10">
        <Link to="/">
          <Photo
            className="w-32 mx-auto block"
            src="/logoKakaoText.png"
            alt="kakao-text-logo"
          />
        </Link>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
