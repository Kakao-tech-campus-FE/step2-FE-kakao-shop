import { useEffect, useState } from "react";
import LoginForm from "../components/organisms/LoginForm";
import Loader from "../components/atoms/Loader";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return <>{isLoading ? <Loader /> : <LoginForm />}</>;
};

export default LoginPage;
