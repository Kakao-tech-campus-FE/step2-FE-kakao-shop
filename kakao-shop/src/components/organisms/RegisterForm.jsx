import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../../apis/user";

import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from "../../utils/validate";

import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import InputGroup from "../molecules/InputGroup";
import FormContainer from "../atoms/FormContainer";

/**
 * 회원가입 폼 컴포넌트
 * 이메일, 이름, 비밀번호, 비밀번호 확인을 입력받아 회원가입을 시도하는 컴포넌트
 *
 * @todo react-form으로 변경
 */
const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  // 문자열로 저장해야할까? boolean으로 저장해야할까?
  // 에러 케이스가 추가되는 경우를 생각하면 문자열이 더 좋을 것 같은데 그런 경우가 있을까
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    required: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!value.email || !value.password || !value.passwordConfirm) {
      const errorMessage = "모든 항목을 입력해주세요.";
      setErrorMessage((prev) => ({ ...prev, required: errorMessage }));
      return;
    } else {
      setErrorMessage((prev) => ({ ...prev, required: "" }));
    }

    if (!validateEmail(value.email)) {
      const errorMessage = "올바르지 못한 이메일 형식입니다.";
      setErrorMessage((prev) => ({ ...prev, email: errorMessage }));
      return;
    } else {
      setErrorMessage((prev) => ({ ...prev, email: "" }));
    }

    if (!validatePassword(value.password)) {
      const errorMessage =
        "비밀번호는 영문, 숫자, 특수문자를 포함하고 공백이 없는 8~20자여야 합니다.";
      setErrorMessage((prev) => ({ ...prev, password: errorMessage }));
      return;
    } else {
      setErrorMessage((prev) => ({ ...prev, password: "" }));
    }

    if (!validatePasswordConfirm(value.password, value.passwordConfirm)) {
      const errorMessage = "비밀번호가 일치하지 않습니다.";
      setErrorMessage((prev) => ({ ...prev, passwordConfirm: errorMessage }));
      return;
    } else {
      setErrorMessage((prev) => ({ ...prev, passwordConfirm: "" }));
    }

    try {
      await register({
        email: value.email,
        password: value.password,
        username: value.username,
      });
      navigate("/", { replace: true });
    } catch (error) {
      // 중복 이메일
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.error.message.split(" : ") === value.email
      ) {
        const errorMessage = "이미 존재하는 이메일입니다.";
        setErrorMessage(errorMessage);
      }
    }
  };

  const inputBoxStyle = `border-b border-solid py-2 mb-2 font-bold`;
  const inputLabelStyle = `block text-sm text-gray-800 mb-2 mt-2`;
  const errorStyle = `text-red-500 text-sm whitespace-pre-line`;

  return (
    <FormContainer>
      <InputGroup
        id="email"
        type="email"
        name="email"
        value={value.email}
        placeholder="카카오메일 아이디, 이메일, 전화번호"
        label="이메일(아이디)"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />
      {errorMessage.email && <p className={errorStyle}>{errorMessage.email}</p>}

      <InputGroup
        id="username"
        type="text"
        name="username"
        value={value.username}
        placeholder="이름"
        label="이름"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />

      <InputGroup
        id="password"
        type="password"
        name="password"
        value={value.password}
        placeholder="비밀번호"
        label="비밀번호"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />
      {errorMessage.password && (
        <p className={errorStyle}>{errorMessage.password}</p>
      )}

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        value={value.passwordConfirm}
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />
      {errorMessage.passwordConfirm && (
        <p className={errorStyle}>{errorMessage.passwordConfirm}</p>
      )}

      {errorMessage.required && (
        <p className={errorStyle}>{errorMessage.required}</p>
      )}

      <Button color="kakao" className="mt-12" onClick={handleRegister}>
        회원가입
      </Button>
    </FormContainer>
  );
};

export default RegisterForm;
