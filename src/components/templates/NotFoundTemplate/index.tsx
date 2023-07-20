import TextLogo from "@components/atoms/TextLogo";
import LoginFooter from "@components/molecules/LoginFooter";
import NotFoundForm from "@components/organisms/NotFoundForm";

const NotFoundTemplate = () => {
  return (
    <div>
      <TextLogo padding={"40px 0 0 0"} />
      <NotFoundForm />
      <LoginFooter />
    </div>
  );
};

export default NotFoundTemplate;
