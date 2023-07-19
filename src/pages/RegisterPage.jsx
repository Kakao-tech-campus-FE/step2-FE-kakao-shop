import { useEffect, useState } from "react";
import RegisterForm from "../components/organisms/RegisterForm";
import Loader from "../components/atoms/Loader";

/** 회원가입 페이지
 *
 * @return {JSX.Element}
 */
const RegisterPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{loading ? <Loader /> : <RegisterForm />}</>;
};

export default RegisterPage;
