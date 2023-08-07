import RegisterForm from "../organisms/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={"page h-full justify-center"}>
      <div className={"absolute top-[20%] w-full max-w-[540px]"}>
        <h1 className={"text-3xl font-bold"}>회원가입</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
