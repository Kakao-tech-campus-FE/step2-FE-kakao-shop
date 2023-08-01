import RegisterForm from "../organisms/RegisterForm";
import Title from "../atoms/Title";
import Container from "../atoms/Container";
import "../../styles/pages/formPage.css";

const RegisterPage = () => {
  return (
    <div className={"page"}>
      <Container className={"form-page"}>
        <Title>회원가입</Title>
        <RegisterForm />
      </Container>
    </div>
  );
};

export default RegisterPage;
