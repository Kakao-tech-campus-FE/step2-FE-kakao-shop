import { FC } from "react";
import ButtonFormItem from "@/components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@/components/Form/FormItem/InputFormItem.component";
import { canPassword, isEmail } from "@/functions/validator";

interface SignUpProps {
  emailProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isWrong?: boolean;
    wrongMessage?: string;
  };
  nameProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  passwordProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    minLength?: number;
    maxLength?: number;
    isWrong?: boolean;
    wrongMessage?: string;
  };
  passwordConfirmProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isWrong?: boolean;
    wrongMessage?: string;
  };
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpForm: FC<SignUpProps> = ({
  emailProps,
  nameProps,
  passwordProps,
  passwordConfirmProps,
  onSubmit,
}) => {
  return (
    <form
      className="flex flex-col gap-4 w-[40rem] last:mt-12"
      onSubmit={onSubmit}
    >
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
