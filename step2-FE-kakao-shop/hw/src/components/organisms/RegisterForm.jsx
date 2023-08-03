import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register, checkEmail } from "../../services/user";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  // 값 입력하면 여기에 담김
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // 유효성 조건들
  const EMAIL_REG = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$");
  const PASSWORD_REG = new RegExp(
    "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$"
  );

  // 에러 메시지들
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");

  // 유효성 검사
  const validEmail = EMAIL_REG.test(value.email);
  const validPassword = PASSWORD_REG.test(value.password);
  const validPasswordConfirm = value.password === value.passwordConfirm;

  // 유효성해서 틀리면 메시지 세팅
  const onChangeEmail = (e) => {
    handleOnChange(e);
    if (validEmail === false) {
      setEmailMsg("이메일 형식으로 입력하세요.");
    } else {
      setEmailMsg("");
    }
  };
  const onChangePassword = (e) => {
    handleOnChange(e);
    if (validPassword === false) {
      setPasswordMsg("8에서 20자리 영문, 숫자, 특수기호가 포함되어야 합니다.");
    } else {
      setPasswordMsg("");
    }
  };
  const onChangePasswordConfirm = (e) => {
    handleOnChange(e);
    if (!validPasswordConfirm) {
      setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordConfirmMsg("");
    }
  };

  const handleCheckEmail = () => {
    checkEmail({ email: value.email })
      .then((response) => {
        alert("사용 가능한 이메일입니다.");
        if (response.success) {
          alert("사용 가능한 이메일입니다.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("동일한 이메일이 이미 존재합니다.");
        alert("이메일 중복 체크에 실패하였습니다.");
      });
  };

  // 여기부터 리턴
  return (
    <Container>
      <Link to="/">
        <Title>Main page로</Title>
      </Link>
      <Title>회원가입</Title>

      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={onChangeEmail}
      />

      <button onClick={handleCheckEmail}>중복체크</button>

      <div>{emailMsg}</div>

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********"
        label="비밀번호"
        value={value.password}
        onChange={onChangePassword}
      />

      <div>{passwordMsg}</div>

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="**********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={onChangePasswordConfirm}
      />

      <div>{passwordConfirmMsg}</div>

      <Button
        className="m-4 p-4 text-black font-bold text-xl bg-yellow-400"
        disabled={!validEmail || !validPassword || !validPasswordConfirm}
        onClick={() => {
          // api 회원가입 요청
          register({
            email: value.email,
            password: value.password,
            username: value.username,
          });
          navigate("/");
        }}
      >
        회원가입
      </Button>
      <Button
        className="m-4 p-4 text-black font-bold text-xl bg-yellow-400"
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

export default RegisterForm;
