import RegisterForm from "../components/organisms/RegisterForm";
import Photo from "../components/atoms/Photo";

/**
 * 회원가입 페이지
 *
 * @returns {JSX.Element} - 회원가입 페이지의 JSX 요소
 */
const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="mt-32 mb-10">
        <Photo
          className="w-32 mx-auto"
          src="/logoKakaoText.png"
          alt="kakao-text-logo"
        />
      </div>
      <RegisterForm />;
    </div>
  );
};

export default RegisterPage;
