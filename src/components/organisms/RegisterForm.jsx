import React, { useState } from "react";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useNavigate } from "react-router-dom";
import { register, checkEmail } from "../../services/user";
import { validateEmail, validatePassword } from "../../utils/validation";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [value, handleOnChange] = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleCheckEmail = () => {
    if (value.email.trim() === "") {
      setErrorMessage("이메일을 입력해주세요.");
      setIsEmailChecked(false); 
      return;
    }

    if (!validateEmail(value.email)) {
      setErrorMessage("유효한 이메일을 입력해주세요.");
      setIsEmailChecked(false); 
      return;
    }

    checkEmail({ email: value.email })
      .then((response) => {
        if (response.success) {
          setErrorMessage("사용 가능한 이메일입니다.");
          setIsEmailChecked(true);
        } else {
          setErrorMessage("동일한 이메일이 이미 존재합니다.");
          setIsEmailChecked(false); 
        }
      })
      .catch((error) => {
        console.error("이메일 중복 체크에 실패하였습니다.", error);
        setErrorMessage("이메일 중복 체크에 실패하였습니다.");
        setIsEmailChecked(false); 
      });
  };

  const handleRegister = () => {
    if (!isEmailChecked) {
      setErrorMessage("이메일 중복 체크를 완료해주세요.");
      return;
    }
    
    if (
      value.email.trim() === "" ||
      value.username.trim() === "" ||
      value.password.trim() === "" ||
      value.passwordConfirm.trim() === ""
    ) {
      setErrorMessage("모든 필드를 입력해주세요.");
      return;
    }

    if (!validateEmail(value.email)) {
      setErrorMessage("유효한 이메일을 입력해주세요.");
      return;
    }

    if (!validatePassword(value.password)) {
      setErrorMessage("올바른 비밀번호 형식을 입력해주세요.");
      return;
    }

    if (value.password !== value.passwordConfirm) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      .then(() => {
        console.log("회원가입이 완료되었습니다.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("회원가입에 실패하였습니다.", error);
        setErrorMessage("회원가입에 실패하였습니다.");
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <div>
        <InputGroup
          id="email"
          type="email"
          name="email"
          placeholder=" 이메일"
          label="이메일 (아이디) "
          value={value.email}
          onChange={handleOnChange}
        />
        
        {!isEmailChecked && (
          <p>
            <a href="#" onClick={handleCheckEmail}>
              중복 체크
            </a>
          </p>
        )}
        <InputGroup
          id="username"
          type="text"
          name="username"
          placeholder=" 이름"
          label="이름 "
          value={value.username}
          onChange={handleOnChange}
        />

        <InputGroup
          id="password"
          type="password"
          name="password"
          placeholder=" 비밀번호"
          label="비밀번호 "
          value={value.password}
          onChange={handleOnChange}
        />

        <InputGroup
         id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder=" 비밀번호 확인"
          label="비밀번호 확인 "
          value={value.passwordConfirm}
          onChange={handleOnChange}
        />
      </div>

      {isEmailChecked && <p>{errorMessage}</p>}

      <Button onClick={handleRegister}>
        회원가입
      </Button>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        <a href="#" onClick={handleLogin}>
          로그인
        </a>
      </p>
    </Container>
  );
};

export default RegisterForm;