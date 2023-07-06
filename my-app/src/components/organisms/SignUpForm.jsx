import Inner2 from "../atoms/Inner2";
import Inner1 from "../atoms/Inner1";
import Title from "../atoms/Title";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";

import { checkDuplication, signup } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [usernameMessage, setUsernameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState(false);

  const onChangeUsername = useCallback((e) => {
    const USERNAME_REG = new RegExp("^[a-zA-Z가-힣]{1,}$");
    const usernameCurrent = e.target.value;
    setUsername(usernameCurrent);
    if (!USERNAME_REG.test(usernameCurrent)) {
      setUsernameMessage("영어나 한글을 입력해주세요.");
      setIsValidUsername(false);
    } else {
      setUsernameMessage("");
      setIsValidUsername(true);
    }
  }, []);

  const onChangeEmail = useCallback((e) => {
    const EMAIL_REG = new RegExp(
      "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!EMAIL_REG.test(emailCurrent)) {
      setEmailMessage("이메일 형식으로 입력해주세요.");
      setIsValidEmail(false);
    } else {
      setEmailMessage("");
      setIsValidEmail(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const PW_REG = new RegExp(
      "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$"
    );
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!PW_REG.test(passwordCurrent)) {
      setPasswordMessage("공백 없이 영어, 숫자, 특수문자를 포함해주세요.");
      setIsValidPassword(false);
    } else {
      setPasswordMessage("");
      setIsValidPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("");
        setIsValidPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsValidPasswordConfirm(false);
      }
    },
    [password]
  );

  const isFormValid =
    isValidUsername &&
    isValidEmail &&
    isValidPassword &&
    isValidPasswordConfirm;

  const emailCheck = () => {
    checkDuplication({ email }).catch((e) => {
      alert(e);
      setEmailMessage(e);
      setIsValidEmail(false);
    });
  };

  return (
    <Inner2>
      <Inner1>
        <Title>가입을 시작합니다!</Title>
        <InputGroup
          id="username"
          name="username"
          placeholder="이름"
          type="text"
          value={username}
          onChange={onChangeUsername}
          error={!isValidUsername}
          errorMessage={usernameMessage}
        />
        <InputGroup
          id="email"
          name="email"
          placeholder="이메일"
          type="email"
          value={email}
          onChange={onChangeEmail}
          error={!isValidEmail}
          errorMessage={emailMessage}
        />
        <Button onClick={emailCheck}>중복 체크</Button>
        <InputGroup
          id="password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePassword}
          error={!isValidPassword}
          errorMessage={passwordMessage}
        />
        <InputGroup
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          error={!isValidPasswordConfirm}
          errorMessage={passwordConfirmMessage}
        />
        <Button
          disabled={!isFormValid}
          onClick={() => {
            signup({ username, email, password });
            navigate("/");
          }}
        >
          회원가입
        </Button>
      </Inner1>
    </Inner2>
  );
};

export default SignUpForm;
