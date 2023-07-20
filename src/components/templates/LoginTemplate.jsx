import Gnb from "../organisms/Gnb";
import LoginForm from "../organisms/LoginForm";
import GoRegister from "../molecules/GoRegister";
import { useSelector } from "react-redux";

const LoginTemplate = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Gnb>{state.loginState ? "로그아웃" : "로그인"}</Gnb>
      <LoginForm />
      <GoRegister />
    </>
  );
};

export default LoginTemplate;
