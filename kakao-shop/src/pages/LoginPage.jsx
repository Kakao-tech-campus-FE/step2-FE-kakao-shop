import LoginForm from "../components/organisms/LoginForm";

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
