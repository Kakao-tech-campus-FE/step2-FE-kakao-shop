import { FC } from "react";
import ButtonFormItem from "@/components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@/components/Form/FormItem/InputFormItem.component";

interface emailProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isWrong?: boolean;
  wrongMessage?: string;
}

interface nameProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface passwordProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
  isWrong?: boolean;
  wrongMessage?: string;
}

interface passwordConfirmProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isWrong?: boolean;
  wrongMessage?: string;
}
interface SignUpProps {
  emailProps: emailProps;
  nameProps: nameProps;
  passwordProps: passwordProps;
  passwordConfirmProps: passwordConfirmProps;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * SignUpForm component
 * @param {emailProps} emailProps - 이메일 input의 props
 * @param {nameProps} nameProps - 이름 input의 props
 * @param {passwordProps} passwordProps - 비밀번호 input의 props
 * @param {passwordConfirmProps} passwordConfirmProps - 비밀번호 확인 input의 props
 * @param {function} onSubmit - form이 submit될 때 실행되는 함수
 * @returns {JSX.Element} - SignUpForm component
 * @constructor
 */
const SignUpForm: FC<SignUpProps> = ({
  emailProps,
  nameProps,
  passwordProps,
  passwordConfirmProps,
  onSubmit,
}) => {
  return (
    <form className="flex flex-col gap-4 w-[40rem] " onSubmit={onSubmit}>
      <InputFormItem
        label="이메일 (아이디)"
        placeholder="이메일"
        type="text"
        {...emailProps}
      />
      <InputFormItem
        label="이름"
        placeholder="이름"
        type="text"
        {...nameProps}
      />
      <InputFormItem
        label="비밀번호"
        placeholder="비밀번호"
        type="password"
        {...passwordProps}
      />
      <InputFormItem
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        type="password"
        {...passwordConfirmProps}
      />
      <div className="w-full mt-8">
        <ButtonFormItem color="primary" type="submit">
          회원가입
        </ButtonFormItem>
      </div>
    </form>
  );
};

export default SignUpForm;
