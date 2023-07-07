import LoginTemplate from "@components/templates/LoginTemplate";
import { useRedirect } from "@hooks/useRedirect";

const Login = () => {
  useRedirect();
  return (
    <div>
      <LoginTemplate />
    </div>
  );
};

export default Login;
