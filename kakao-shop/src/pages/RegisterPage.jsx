import RegisterForm from "../components/organisms/RegisterForm";
import Photo from "../components/atoms/Photo";
import Link from "../components/atoms/Link";

/**
 * 회원가입 페이지
 *
 * @returns {JSX.Element} - 회원가입 페이지의 JSX 요소
 */
const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="mt-32 mb-10">
        <Link to="/">
          <Photo
            className="w-32 mx-auto block"
            src="/logoKakaoText.png"
            alt="kakao-text-logo"
          />
        </Link>
      </div>
      <RegisterForm />;
    </div>
  );
};

export default RegisterPage;
