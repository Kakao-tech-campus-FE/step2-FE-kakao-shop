import Container from "../components/atoms/Container";
import Title from "../components/atoms/Title";
import RegisterForm from "../components/organisms/RegisterForm";
import BreadCrumb from "../components/BreadCrumb";

const RegisterPage = () => {
  return (
    <>
    <Container className="border bg-slate-100 border-slate-500 border-solid rounded-md flex flex-col justify-center">
      <BreadCrumb />
      <Container className="flex flex-col items-center">
        <Title className="-mx-3 m-3 block w-96 bg-slate-200 rounded-lg px-3 py-2 text-center text-base font-semibold leading-7"> 회원가입 페이지</Title>
        <RegisterForm />
      </Container>
    </Container>
    </>
  )
}

export default RegisterPage;