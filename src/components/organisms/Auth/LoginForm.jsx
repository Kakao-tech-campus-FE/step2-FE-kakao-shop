import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Box from "../../atoms/Box";
import useInput from "../../../hooks/useInput";
import useLoginValidation from "../../../hooks/useLoginValidation";
import { loginRequest } from "../../../store/slices/userSlice";
import { setCookie } from "../../../utils/cookie";

const initialState = { email: "", password: "" };

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, handleChange] = useInput(initialState);
  const { error, setError, checkRegex } = useLoginValidation({ form });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [errorResult, formType] = checkRegex();
    setError(errorResult);
    if (formType === "email") emailRef.current.focus();
    else if (formType === "password") passwordRef.current.focus();

    if (!errorResult) {
      try {
        const response = await dispatch(
          loginRequest({
            email: form.email,
            password: form.password,
          })
        );

        const accessToken = response.payload.accessToken.split(" ")[1];
        setCookie("accessToken", accessToken, 1000 * 60 * 60 * 24);
        navigate("/");
      } catch (error) {
        setError("인증되지 않았습니다");
      }
    }
  };

  return (
    <form
      className="flex flex-col mt-6 p-16 w-input border"
      onSubmit={handleSubmit}
    >
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
        {error ? error : null}
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
