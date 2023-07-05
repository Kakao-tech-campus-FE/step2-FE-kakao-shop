import LinkButton from '../atoms/linkButton';
import LoginForm from '../organisms/loginForm';

interface ILoginTemplateProps {
  // User informations for login
  email: string;
  password: string;

  // Control input values
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  resetValue: React.MouseEventHandler<HTMLButtonElement>;

  // Request login
  handleLogin: React.FormEventHandler<HTMLFormElement>;
}

export default function LoginTemplate({
  email,
  password,
  handleChange,
  resetValue,
  handleLogin,
}: ILoginTemplateProps) {
  return (
    <div className="flex min-w-[20rem] flex-col justify-center text-blue-950">
      <h1 className="mt-8 py-4 text-center text-3xl">로그인</h1>
      <div className="my-4 p-8
          sm:w-[40rem] sm:self-center sm:rounded-sm sm:border sm:border-stone-300"
      >
        <LoginForm
          email={email}
          password={password}
          handleChange={handleChange}
          resetValue={resetValue}
          handleLogin={handleLogin}
        />
        <div className="my-4 text-center">
          <LinkButton href="/register">
            회원가입
          </LinkButton>
        </div>
      </div>
      <div className="text-center">
        <LinkButton href="/">
          메인 페이지로
        </LinkButton>
      </div>
    </div>
  );
}
