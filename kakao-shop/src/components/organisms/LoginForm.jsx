import React, { useState } from "react";

import useFocus from "../../hooks/useFocus";

import InputGroup from "../molecules/InputGroup";
import CheckboxGroup from "../molecules/CheckboxGroup";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Link from "../atoms/Link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailFocus, onFocusEmail, onBlurEmail] = useFocus();
  const [isPasswordFocus, onFocusPassword, onBlurPassword] = useFocus();

  const [isKeepLog, setIsKeepLog] = useState(false);

  const inputBoxStyle = `border-b border-solid py-1 mb-2 font-bold`;

  return (
    <Container className="w-440 border border-solid border-gray-300 p-16 mx-auto w-[570px]">
      <InputGroup
        id="email"
        type="email"
        value={email}
        placeholder="카카오메일 아이디, 이메일, 전화번호"
        label=""
        className={`${inputBoxStyle} ${
          isEmailFocus ? "border-black" : "border-gray-300"
        }`}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={onFocusEmail}
        onBlur={onBlurEmail}
      />
      {(isEmailFocus || email) && (
        <p className="text-xs mb-5">
          <span className="text-red-500 font-bold">TIP</span> 카카오메일이
          있다면 메일 아이디만 입력해 보세요.
        </p>
      )}

      <InputGroup
        id="password"
        type="password"
        value={password}
        placeholder="비밀번호"
        label=""
        className={`${inputBoxStyle} ${
          isPasswordFocus ? "border-black" : "border-gray-300"
        }`}
        onChange={(e) => setPassword(e.target.value)}
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

      <Button color="kakao">로그인</Button>

      <div className="mt-8 text-xs">
        <Link to="/register">회원가입</Link>
      </div>
    </Container>
  );
};

export default LoginForm;
