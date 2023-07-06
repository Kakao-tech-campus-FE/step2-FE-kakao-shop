import RegisterForm from "../components/organisms/RegisterForm";

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
