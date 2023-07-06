import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useinput";
import Title from "../atoms/Title";
import { validateForm } from "../atoms/VaildationSignup";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/api";
import { useState } from "react";
import logo from "../../images/logoKakaoText.png";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState([]);

  const handleRegister = () => {
    // const validationErrors = validateForm(value);
    const validationErrors = validateForm(value);

    if (!validationErrors) {
      register({
        email: value.email,
        password: value.password,
        username: value.username,
      });
      navigate("/");
    } else {
      setErrors(validationErrors);
    }
  };
  // const [username, setUsername] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [passwordConfirm, setPasswordConfirm] = useState()
  // 등 4개가 있어야 하는걸 hook을 사용하여 1개로 줄임

  return (
    <Container>
      <Title>
        <img src={logo} alt="logo" />
      </Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일"
        label="이메일 (아이디)"
        value={value.email}
        onChange={handleOnChange}
      />

      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="이름"
        label="이름 "
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />

      {errors.map((error, index) => (
        <div className="bg-gray-50 p-2">
          <p className=" text-sm font-medium text-red-500" key={index}>
            {error}
          </p>
        </div>
      ))}

      <Button onClick={handleRegister}>회원가입</Button>
    </Container>
  );
};

export default RegisterForm;
