import { FC } from "react";
import ButtonFormItem from "@components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@components/Form/FormItem/InputFormItem.component";
import { SIGN } from "@/assets/sign.ko";

const { EMAIL, PASSWORD } = SIGN;
/**
 * SignUpForm component
 * @param {emailProps} emailProps - 이메일 input의 props
 * @param {passwordProps} passwordProps - 비밀번호 input의 props
 * @param {function} onSubmit - form이 submit될 때 실행되는 함수
 * @returns {JSX.Element} - SignUpForm component
 * @constructor
 */
const SignInForm: FC<SignInProps> = ({
  emailProps,
  passwordProps,
  onSubmit,
}) => {
  return (
    <form className="flex flex-col gap-4 w-[40rem] " onSubmit={onSubmit}>
      <InputFormItem placeholder={EMAIL} type="text" {...emailProps} />
      <InputFormItem
        placeholder={PASSWORD}
        type="password"
        {...passwordProps}
      />
      <div className="w-full mt-8">
        <ButtonFormItem color="primary" type="submit">
          로그인
        </ButtonFormItem>
      </div>
    </form>
  );
};

export default SignInForm;
