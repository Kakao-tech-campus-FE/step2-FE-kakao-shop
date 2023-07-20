import RegisterTemplate from "@components/templates/RegisterTemplate";
import { useRedirect } from "@hooks/useRedirect";

const Register = () => {
  useRedirect("main");
  return (
    <div>
      <RegisterTemplate />
    </div>
  );
};

export default Register;
