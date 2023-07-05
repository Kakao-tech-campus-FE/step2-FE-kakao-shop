import LinkButton from '../atoms/linkButton';
import RegisterForm from '../organisms/registerForm';

interface IRegisterTemplateProps {
  // User informations for register
  email: string;
  username: string;
  password: string;
  confirmPassword: string;

  // Control input values
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  resetValue: React.MouseEventHandler<HTMLButtonElement>;

  // Request registration
  handleRegister: React.FormEventHandler<HTMLFormElement>;
}

export default function RegisterTemplate({
  email,
  username,
  password,
  confirmPassword,
  handleChange,
  resetValue,
  handleRegister,
}: IRegisterTemplateProps) {
  return (
    <div className="flex min-w-[20rem] flex-col justify-center text-blue-950">
      <h1 className="mt-8 py-4 text-center text-3xl">회원 가입</h1>
      <div className="my-4 p-8 pb-16
          sm:w-[40rem] sm:self-center sm:rounded-sm sm:border sm:border-stone-300"
      >
        <RegisterForm
          email={email}
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          handleChange={handleChange}
          resetValue={resetValue}
          handleRegister={handleRegister}
        />
      </div>
      <div className="text-center">
        <LinkButton href="/">
          메인 페이지로
        </LinkButton>
      </div>
    </div>
  );
}
