import LoginForm from "../organisms/LoginForm";
const LoginPage = () => {
  return (
    <div className={"page h-full justify-center"}>
      <div className={"w-full max-w-[540px] absolute top-[20%]"}>
        <h1 className={"text-3xl font-bold"}>로그인</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
