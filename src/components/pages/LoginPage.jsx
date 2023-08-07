import LoginForm from "../organisms/LoginForm";

const LoginPage = () => {
  return (
    <div className={"page h-full justify-center"}>
      <div className={"sli absolute top-[20%] w-full max-w-[540px]"}>
        <h1 className={"text-3xl font-bold"}>로그인</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
