import Gnb from "../organisms/Gnb";
import RegisterForm from "../organisms/RegisterForm";
import { useSelector } from "react-redux";

const RegisterTemplate = () => {
  return (
    <>
      <Gnb />
      <RegisterForm />
    </>
  );
};

export default RegisterTemplate;
