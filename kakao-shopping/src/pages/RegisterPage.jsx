import Container from "../components/atoms/Container";
import RegisterForm from "../components/organisms/RegisterForm";

const RegisterPage = () => {
  return (
    <Container className="h-screen border border-slate-500 border-solid rounded-md flex flex-col justify-center">
      <RegisterForm />
    </Container>
  )
}

export default RegisterPage;