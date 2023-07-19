import { useEffect, useState } from "react";
import RegisterForm from "../components/organisms/RegisterForm";
import Loader from "../components/atoms/Loader";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return <>{isLoading ? <Loader /> : <RegisterForm />}</>;
};

export default RegisterPage;
