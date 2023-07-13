import LoginForm from "@components/organisms/LoginForm";
import LoginFooter from "@components/molecules/LoginFooter";
import TextLogo from "@components/atoms/TextLogo";

const LoginTemplate = () => {
  return (
    <div>
      <TextLogo padding={"40px 0 0 0"} />
      <LoginForm />
      <LoginFooter />
    </div>
  );
};

export default LoginTemplate;
