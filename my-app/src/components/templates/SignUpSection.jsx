import SignUpForm from "../organisms/SignUpForm";
import LoginFooter from "../atoms/LoginFooter";

const SignUpSection = () => {
  return (
    <div className="flex flex-col justify-center my-auto h-[90vh]">
      <SignUpForm />
      <LoginFooter />
    </div>
  );
};

export default SignUpSection;
