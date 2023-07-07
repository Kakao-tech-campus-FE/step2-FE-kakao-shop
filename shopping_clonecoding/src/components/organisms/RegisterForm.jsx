import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, duplicate } from "../../services/api";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [errors, setError] = useState({});
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleDuplicate = async () => {
    const email = value.email;
    const response = await duplicate(email);
    console.log(response);
    if (response.request.status === 400) {
      setError((prevState) => ({
        ...prevState,
        duplicate: "동일한 이메일이 존재합니다.",
      }));
    }
    if (response.request.status === 200) {
      setError((prevState) => ({
        ...prevState,
        duplicate: "이 이메일을 사용할 수 있습니다.",
      }));
    }
  };

  const handleRegister = async (data) => {
    try {
      const { email, password, username } = data;
      const response = await register({ email, password, username });
      console.log(response);
      navigate("/login");
    } catch (errors) {
      setError("회원가입에 실패했습니다.");
    }
  };

  const validateEmail = () => {
    const emailRange = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    if (!emailRange.test(value.email)) {
      setError((prevState) => ({
        ...prevState,
        email: "유효한 이메일 형식이 아닙니다.",
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        email: undefined,
      }));
    }
    return true;
  };

  const validatePassword = () => {
    const passwordRange =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!passwordRange.test(value.password)) {
      setError((prevState) => ({
        ...prevState,
        password:
          "비밀번호는 영문, 숫자, 특수문자를 포함하고, 공백이 없으며 8~20자여야 합니다.",
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        password: undefined,
      }));
    }
    return true;
  };

  const validateConfirm = () => {
    if (value.password !== value.passwordConfirm) {
      setError((prevState) => ({
        ...prevState,
        passwordConfirm: "입력한 비밀번호와 다릅니다.",
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        passwordConfirm: undefined,
      }));
    }
    return true;
  };

  const handleOnSubmit = () => {
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidConfirm = validateConfirm();

    if (isValidEmail && isValidPassword && isValidConfirm) {
      handleRegister({
        email: value.email,
        password: value.password,
        username: value.username,
        passwordConfirm: value.passwordConfirm,
      });
    }
  };

  return (
    <Container>
      <Title>회원 가입</Title>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요."
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <Button onClick={handleDuplicate}>중복체크</Button>
      {errors.duplicate && <div>{errors.duplicate}</div>}
      {errors.email && <div>{errors.email}</div>}

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********."
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      {errors.password && <div>{errors.password}</div>}

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      {errors.passwordConfirm && <div>{errors.passwordConfirm}</div>}
      <Button onClick={handleOnSubmit}>회원가입</Button>
    </Container>
  );
};

export default RegisterForm;
