import { FC } from "react";
import ButtonFormItem from "@components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@components/Form/FormItem/InputFormItem.component";
import {
  EMAIL,
  PASSWORD,
  PASSWORD_CONFIRM,
  USERNAME,
  EMAIL_WITH_ID,
  SIGN_UP,
} from "@/assets/sign.ko.json";

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
        label={EMAIL_WITH_ID}
        placeholder={EMAIL}
        type="text"
        {...emailProps}
      />
      <InputFormItem
        label={USERNAME}
        placeholder={USERNAME}
        type="text"
        {...nameProps}
      />
      <InputFormItem
        label={PASSWORD}
        placeholder={PASSWORD}
        type="password"
        {...passwordProps}
      />
      <InputFormItem
        label={PASSWORD_CONFIRM}
        placeholder={PASSWORD_CONFIRM}
        type="password"
        {...passwordConfirmProps}
      />
      <div className="w-full mt-8">
        <ButtonFormItem color="primary" type="submit">
          {SIGN_UP}
        </ButtonFormItem>
      </div>
    </form>
  );
};

export default SignUpForm;
