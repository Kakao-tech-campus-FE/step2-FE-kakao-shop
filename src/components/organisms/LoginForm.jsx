import React, { useRef, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import Box from "../atoms/Box";

const initialState = { email: "", password: "" };

const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
);
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const ERROR_MSG = {
  requiredEmail: "이메일을 입력해 주세요.",
  requiredPw: "비밀번호를 입력해 주세요.",
  invalidEmail: "이메일을 정확하게 입력해 주세요.",
  invalidPw: "비밀번호가 올바르지 않습니다.(8~16자/영문자/숫자)",
};

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorResult = checkRegex();
    setError(errorResult);
  };

  const checkRegex = () => {
    const { email, password } = form;

    if (email.length === 0) {
      emailRef.current.focus();
      return "requiredEmail";
    } else if (!EMAIL_REGEX.test(email)) {
      emailRef.current.focus();
      return "invalidEmail";
    } else if (password.length === 0) {
      passwordRef.current.focus();
      return "requiredPw";
    } else if (!PW_REGEX.test(password)) {
      passwordRef.current.focus();
      return "invalidPw";
    } else {
      return true;
    }
  };

  return (
    <form className="flex flex-col mt-6 p-16 border" onSubmit={handleSubmit}>
      <Input
        inputRef={emailRef}
        type="text"
        value={form.email}
        name="email"
        placeholder="이메일"
        autoFocus={true}
        onChange={handleChange}
      />
      <Input
        inputRef={passwordRef}
        type="password"
        value={form.password}
        name="password"
        placeholder="비밀번호"
        onChange={handleChange}
      />
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
        로그인
      </Button>
      <Box className="mt-4">
        <Link
          to="/signup"
          className="p-1 text-xs font-semibold hover:underline"
        >
          회원가입
        </Link>
      </Box>
    </form>
  );
}
