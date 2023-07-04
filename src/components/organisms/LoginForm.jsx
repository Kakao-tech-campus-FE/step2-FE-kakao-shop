import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const initialState = { email: "", password: "" };

export default function LoginForm() {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <form className="flex flex-col mt-6 p-16 border">
      <Input
        type="text"
        value={form.email}
        name="email"
        placeholder="이메일"
        onChange={handleChange}
      />
      <Input
        type="password"
        value={form.password}
        name="password"
        placeholder="비밀번호"
        onChange={handleChange}
      />
      <Button
        margin="mt-8"
        padding="py-2"
        textsize="lg"
        color="yellow"
        radius="sm"
      >
        로그인
      </Button>
    </form>
  );
}
