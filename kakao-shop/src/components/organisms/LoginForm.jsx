import React, { useState } from "react";

import useFocus from "../../hooks/useFocus";
import useInput from "../../hooks/useInput";

import { login } from "../../apis/api";

import { validateEmail, validatePassword } from "../../utils/validate";

import InputGroup from "../molecules/InputGroup";
import CheckboxGroup from "../molecules/CheckboxGroup";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Link from "../atoms/Link";

const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [isEmailFocus, onFocusEmail, onBlurEmail] = useFocus();
  const [isPasswordFocus, onFocusPassword, onBlurPassword] = useFocus();
  const [isKeepLog, setIsKeepLog] = useState(false);

  const handleLogin = async () => {
    if (!validateEmail(value.email)) {
      const errorMessage = "카카오계정을 정확하게 입력해 주세요.";
      setErrorMessage(errorMessage);
      return;
    }

    if (!validatePassword(value.password)) {
      console.log("비번 이상");
      const errorMessage = "비밀번호가 올바르지 않습니다.";
      setErrorMessage(errorMessage);
      return;
    }

    try {
      await login({
        email: value.email,
        password: value.password,
      });
      // 성공적인 로그인 처리
      console.log("로그인 성공");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        const errorMessage =
          "카카오계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
        setErrorMessage(errorMessage);
      }

      // 혹시 형식이 다른데 못 잡아내고 전송해서 400 에러가 뜨면 처리
      else if (error.response && error.response.status === 400) {
        const errorType = error.response.data.error.message.split(":")[1];
        if (errorType === "email") {
          const errorMessage = "카카오계정을 정확하게 입력해 주세요.";
          setErrorMessage(errorMessage);
        } else if (errorType === "password") {
          const errorMessage = "비밀번호가 올바르지 않습니다.";
          setErrorMessage(errorMessage);
        }
      }
    }
  };

  const inputBoxStyle = `border-b border-solid py-1 mb-2 font-bold`;
  return (
    <Container className="w-440 border border-solid border-gray-300 p-16 mx-auto w-[570px]">
      <InputGroup
        id="email"
        type="email"
        name="email"
        value={value.email}
        placeholder="카카오메일 아이디, 이메일, 전화번호"
        label=""
        className={`${inputBoxStyle} ${
          isEmailFocus ? "border-black" : "border-gray-300"
        }`}
        onChange={handleOnChange}
        onFocus={onFocusEmail}
        onBlur={onBlurEmail}
      />
      {(isEmailFocus || value.email) && (
        <p className="text-xs mb-5">
          <span className="text-red-500 font-bold">TIP</span> 카카오메일이
          있다면 메일 아이디만 입력해 보세요.
        </p>
      )}

      <InputGroup
        id="password"
        type="password"
        name="password"
        value={value.password}
        placeholder="비밀번호"
        label=""
        className={`${inputBoxStyle} ${
          isPasswordFocus ? "border-black" : "border-gray-300"
        }`}
        onChange={handleOnChange}
        onFocus={onFocusPassword}
        onBlur={onBlurPassword}
      />
      <div className="my-6">
        <CheckboxGroup
          name="keepLog"
          items={[
            {
              id: "keepLog",
              value: "keepLog",
              checked: isKeepLog,
              text: "로그인 상태 유지",
            },
          ]}
          onChange={(e) => setIsKeepLog(e.target.checked)}
        />
      </div>
      {errorMessage && (
        <div className="p-4 mb-10 bg-gray-100 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      <Button color="kakao" onClick={handleLogin}>
        로그인
      </Button>

      <div className="mt-8 text-xs">
        <Link to="/register">회원가입</Link>
      </div>
    </Container>
  );
};

export default LoginForm;
