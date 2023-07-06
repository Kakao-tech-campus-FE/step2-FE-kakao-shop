import Container from "../components/atoms/Container";
import RegisterForm from "../components/organisms/RegisterForm";
import MainLogo from "../components/molecules/MainLogo";

const RegisterPage = () => {
  return (
    <Container className="h-screen border border-slate-500 border-solid rounded-md flex flex-col items-center justify-center">
      <MainLogo className="w-40 mb-5"/>
      <Container className="w-fit border border-solid rounded-lg border-gray">
        <RegisterForm />
      </Container>
    </Container>
  )
}

export default RegisterPage;