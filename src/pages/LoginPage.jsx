import { Link } from "react-router-dom";
import Container from "../components/atoms/Container";
import LoginForm from "../components/organisms/LoginForm";

const LoginPage = () => {
  return (
    <Container className="mx-auto pt-12">
      <Link to={"/"}>
        <img
          src="/logoKakaoText.png"
          alt="logoKakaoText"
          className="w-30 h-11 mx-auto"
        />
      </Link>

      <LoginForm />
    </Container>
  );
};

export default LoginPage;
