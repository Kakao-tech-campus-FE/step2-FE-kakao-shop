import { FC } from "react";
import ButtonFormItem from "../FormItem/ButtonFormItem.component";
import InputFormItem from "../FormItem/InputFormItem.component";

interface SignUpProps {
  email: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  name: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  passwordConfirm: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const SignUpForm: FC<SignUpProps> = ({
  email,
  name,
  password,
  passwordConfirm,
}) => {
  return (
    <form>
      <InputFormItem
        label="이메일 (아이디)"
        placeholder="이메일"
        type="email"
        {...email}
      />
      <InputFormItem label="이름" placeholder="이름" type="text" {...name} />
      <InputFormItem
        label="비밀번호"
        placeholder="비밀번호"
        type="password"
        {...password}
      />
      <InputFormItem
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        type="password"
        {...passwordConfirm}
      />
      <ButtonFormItem label="회원가입" type="submit" />
    </form>
  );
};

export default SignUpForm;
