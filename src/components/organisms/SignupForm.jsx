import React, { useState } from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";

const initailState = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirm: "",
};

export default function SignupForm() {
  const [form, setForm] = useState(initailState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <form className="flex flex-col mt-6 p-16 border">
      <InputGroup
        id="email"
        type="text"
        value={form.email}
        name="email"
        placeholder="이메일"
        onChange={handleChange}
      >
        이메일 (아이디)
      </InputGroup>
      <InputGroup
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
        id="passwordConfirm"
        type="password"
        value={form.passwordConfirm}
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        onChange={handleChange}
      >
        비밀번호 확인
      </InputGroup>
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
