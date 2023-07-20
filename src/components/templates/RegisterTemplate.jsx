import Gnb from "../organisms/Gnb";
import RegisterForm from "../organisms/RegisterForm";
import { useSelector } from "react-redux";

const RegisterTemplate = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Gnb>{state.loginState ? "로그아웃" : "로그인"}</Gnb>
      <RegisterForm />
    </>
  );
};

export default RegisterTemplate;
