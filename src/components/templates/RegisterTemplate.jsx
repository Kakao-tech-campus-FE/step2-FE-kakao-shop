import Gnb from "../organisms/Gnb";
import RegisterForm from "../organisms/RegisterForm";
import { useSelector } from "react-redux";

const RegisterTemplate = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Gnb />
      <RegisterForm />
    </>
  );
};

export default RegisterTemplate;
