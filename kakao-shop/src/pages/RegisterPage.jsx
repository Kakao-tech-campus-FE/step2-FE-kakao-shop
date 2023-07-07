import RegisterForm from "../components/organisms/RegisterForm";

/**
 * 회원가입 페이지
 *
 * @returns {JSX.Element} - 회원가입 페이지의 JSX 요소
 */
const RegisterPage = () => {
  return (
    <div>
      <img
        src="/logoKakaoText.png"
        alt="kakao-shopping"
        className="w-32 mx-auto mt-32 mb-10"
      />
      <RegisterForm />;
    </div>
  );
};

export default RegisterPage;
