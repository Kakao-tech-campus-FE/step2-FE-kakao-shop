import { useEffect, useState } from "react";
import LoginForm from "../components/organisms/LoginForm";
import Loader from "../components/atoms/Loader";

/** 로그인 페이지
 *
 * @return {JSX.Element}
 */
const LoginPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{loading ? <Loader /> : <LoginForm />}</>;
};

export default LoginPage;
