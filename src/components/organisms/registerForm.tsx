import Button from '../atoms/button';
import Label from '../atoms/label';
import InputBox from '../molecules/inputBox';

interface IRegisterFormProps {
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

export default function RegisterForm({
  email,
  username,
  password,
  confirmPassword,
  handleChange,
  resetValue,
  handleRegister,
}: IRegisterFormProps) {
  return (
    <form onSubmit={handleRegister}>
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
          htmlFor="username"
          description="이름"
        >
          <InputBox
            inputType="text"
            id="username"
            name="username"
            value={username}
            handleChange={handleChange}
            resetValue={resetValue}
            placeholder="이름을 입력하세요"
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
        <Label
          htmlFor="confirm-password"
          description="비밀번호 확인"
        >
          <InputBox
            inputType="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            resetValue={resetValue}
            placeholder="비밀번호를 다시 입력하세요"
          />
        </Label>
      </div>
      <div className="px-2">
        <Button isSubmitType>
          가입하기
        </Button>
      </div>
    </form>
  );
}
