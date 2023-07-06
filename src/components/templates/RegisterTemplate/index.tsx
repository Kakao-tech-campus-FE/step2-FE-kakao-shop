import TextLogo from "@components/atoms/TextLogo";
import LoginFooter from "@components/molecules/LoginFooter";
import RegisterForm from "@components/organisms/RegisterForm";

const RegisterTemplate = () => {
  return (
    <div>
      <TextLogo padding={"40px 0 0 0"} />
      <RegisterForm />
      <LoginFooter />
    </div>
  );
};

export default RegisterTemplate;
