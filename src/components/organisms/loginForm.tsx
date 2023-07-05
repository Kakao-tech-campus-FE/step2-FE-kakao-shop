import Button from '../atoms/button';
import Label from '../atoms/label';
import InputBox from '../molecules/inputBox';

interface ILoginFormProps {
  // User informations for login
  email: string;
  password: string;

  // Control input values
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  resetValue: React.MouseEventHandler<HTMLButtonElement>;

  // Request login
  handleLogin: React.FormEventHandler<HTMLFormElement>;
}

export default function LoginForm({
  email,
  password,
  handleChange,
  resetValue,
  handleLogin,
}: ILoginFormProps) {
  return (
    <form onSubmit={handleLogin}>
      <div>
        <Label
          htmlFor="email"
          description="이메일"
        >
          <InputBox
            inputType="email"
            id="email"
            name="email"
            value={email}
            handleChange={handleChange}
            resetValue={resetValue}
            placeholder="이메일을 입력하세요"
          />
        </Label>
        <Label
          htmlFor="password"
          description="비밀번호"
        >
          <InputBox
            inputType="password"
            id="password"
            name="password"
            value={password}
            handleChange={handleChange}
            resetValue={resetValue}
            placeholder="비밀번호를 입력하세요"
          />
        </Label>
      </div>
      <div>
        <Button isSubmitType>
          로그인
        </Button>
      </div>
    </form>
  );
}
