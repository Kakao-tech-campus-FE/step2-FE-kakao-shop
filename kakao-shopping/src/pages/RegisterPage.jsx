import Container from "../components/atoms/Container";
import Title from "../components/atoms/Title";
import RegisterForm from "../components/organisms/RegisterForm";

const RegisterPage = () => {
  return (
    <>
    <Container className="border bg-slate-100 border-slate-500 border-solid rounded-md flex flex-col items-center justify-center">
      <Title className="-mx-3 m-3 block bg-slate-200 rounded-lg px-3 py-2 text-base font-semibold leading-7"> 회원가입 페이지</Title>
      <RegisterForm />
    </Container>
    </>
  )
}

export default RegisterPage;