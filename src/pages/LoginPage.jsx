import Container from "../components/atoms/Container";
import LoginForm from "../components/organisms/LoginForm";

const LoginPage = () => {
  return (
    <Container className="mx-auto pt-12">
      <img
        src="/logoKakaoText.png"
        alt="logoKakaoText"
        className="w-30 h-11 mx-auto"
      />
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
