import RegisterForm from "../organisms/RegisterForm";
import Title from "../atoms/Title";
import Container from "../atoms/Container";

const RegisterPage = () => {
  return (
    <div className={"page h-full justify-center"}>
      <div className={"w-full max-w-[540px] absolute top-[20%]"}>
        <h1 className={"text-3xl font-bold"}>회원가입</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
