import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import InputGroup from "../../molecules/Common/InputGroup";
import Button from "../../atoms/Button";
import Box from "../../atoms/Box";
import useSignupValidation from "../../../hooks/useSignupValidation";
import useInput from "../../../hooks/useInput";
import authInstance from "../../../apis/auth";

const initialState = {
  email: "",
  username: "",
  password: "",
  passwordConfirm: "",
};

export default function SignupForm() {
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const conformPasswordRef = useRef(null);

  const navigate = useNavigate();
  const [form, handleChange] = useInput(initialState);
  const { error, setError, checkEmailValidation, checkRegex } =
    useSignupValidation({ form });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [errorResult, formType] = checkRegex();
    setError(errorResult);
    if (formType === "email") emailRef.current.focus();
    else if (formType === "username") usernameRef.current.focus();
    else if (formType === "password") passwordRef.current.focus();
    else if (formType === "confirmPw") conformPasswordRef.current.focus();

    if (!errorResult) {
      try {
        await authInstance.signUp({
          email: form.email,
          username: form.username,
          password: form.password,
        });
        navigate("/");
      } catch (error) {
        const errorResponse = error.response.data.error.message;
        setError(getErrorMessage(errorResponse));
        // 중복된 이메일인 경우를 제외한 에러는 API를 호출하기 전에 확인
        emailRef.current.focus();
      }
    }
  };

  const handleCheck = async () => {
    const errorResult = checkEmailValidation()[0];

    if (errorResult !== false) {
      setError(errorResult);
      emailRef.current.focus();
    } else {
      try {
        await authInstance.checkEmail(form.email);
        setError(false);
        usernameRef.current.focus();
      } catch (error) {
        const errorResponse = error.response.data.error.message;
        setError(getErrorMessage(errorResponse));
      }
    }
  };

  return (
    <form
      className="flex flex-col mt-6 p-16 w-input border"
      onSubmit={handleSubmit}
    >
      <Box className="flex items-end">
        <InputGroup
          inputRef={emailRef}
          id="email"
          type="text"
          value={form.email}
          name="email"
          placeholder="이메일"
          autoFocus={true}
          onChange={handleChange}
        >
          이메일 (아이디)
        </InputGroup>
        <Button
          type="button"
          margin="ml-2 mb-4"
          padding="px-3 py-1"
          height="h-confirmButton"
          textsize="sm"
          color="yellow"
          radius="sm"
          onClick={handleCheck}
        >
          중복확인
        </Button>
      </Box>
      <InputGroup
        inputRef={usernameRef}
        id="username"
        type="text"
        value={form.username}
        name="username"
        placeholder="이름"
        onChange={handleChange}
      >
        이름
      </InputGroup>
      <InputGroup
        inputRef={passwordRef}
        id="password"
        type="password"
        value={form.password}
        name="password"
        placeholder="비밀번호"
        onChange={handleChange}
      >
        비밀번호
      </InputGroup>
      <InputGroup
        inputRef={conformPasswordRef}
        id="passwordConfirm"
        type="password"
        value={form.passwordConfirm}
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        onChange={handleChange}
      >
        비밀번호 확인
      </InputGroup>
      <Box
        className={`${
          error ? "mt-1 mb-3 p-5" : ""
        } text-errorMessage text-red-500 font-semibold bg-gray-100`}
      >
        {error ? error : null}
      </Box>
      <Button
        margin="mt-8"
        padding="py-2"
        textsize="lg"
        color="yellow"
        radius="sm"
      >
        회원가입
      </Button>
    </form>
  );
}

const getErrorMessage = (message) => {
  return message.split(":")[0].trim() + ".";
};
