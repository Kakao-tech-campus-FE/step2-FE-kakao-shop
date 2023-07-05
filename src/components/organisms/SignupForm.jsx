import React, { useRef, useState } from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import useSignupValidation from "../../hooks/useSignupValidation";

const initailState = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirm: "",
};

const ERROR_MSG = {
  requiredEmail: "이메일을 입력해 주세요.",
  requiredNickname: "이름을 입력해 주세요.",
  requiredPw: "비밀번호를 입력해 주세요.",
  requiredConfirmPw: "비밀번호 확인을 입력해 주세요.",
  invalidEmail: "이메일을 정확하게 입력해 주세요.",
  invalidPw: "비밀번호가 올바르지 않습니다.(8~20자/영문자/숫자/특수문자)",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
};

export default function SignupForm() {
  const emailRef = useRef(null);
  const nicknameRef = useRef(null);
  const passwordRef = useRef(null);
  const conformPasswordRef = useRef(null);
  const [form, setForm] = useState(initailState);
  const { error, setError, checkRegex } = useSignupValidation({ form });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const [errorResult, formType] = checkRegex();
    setError(errorResult);
    if (formType === "email") emailRef.current.focus();
    else if (formType === "nickname") nicknameRef.current.focus();
    else if (formType === "password") passwordRef.current.focus();
    else if (formType === "confirmPw") conformPasswordRef.current.focus();
  };

  return (
    <form className="flex flex-col mt-6 p-16 border" onSubmit={handleSubmit}>
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
      <InputGroup
        inputRef={nicknameRef}
        id="nickname"
        type="text"
        value={form.nickname}
        name="nickname"
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
        {error ? ERROR_MSG[error] : null}
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
