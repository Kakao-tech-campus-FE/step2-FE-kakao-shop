import Gnb from "../organisms/Gnb";
import LoginForm from "../organisms/LoginForm";
import GoRegister from "../molecules/GoRegister";

const LoginTemplate = () => {
  return (
    <>
      <Gnb />
      <LoginForm />
      <GoRegister />
    </>
  );
};

export default LoginTemplate;
