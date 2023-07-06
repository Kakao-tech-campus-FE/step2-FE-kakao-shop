import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useinput";
import Title from "../atoms/Title";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../atoms/VaildationLogin";
import { useState } from "react";
import logo from "../../images/logoKakaoText.png";

const LoginForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const handleRegister = () => {
    // const validationErrors = validateForm(value);
    const validationErrors = validateForm(value);

    if (!validationErrors) {
      login({
        email: value.email,
        password: value.password,
      });
      navigate("/");
    } else {
      setErrors(validationErrors);
    }
  };
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
        label="이메일 "
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호"
        label="비밀번호 "
        value={value.password}
        onChange={handleOnChange}
      />
      {errors.map((error, index) => (
        <div className="bg-gray-50 p-2">
          <p className=" text-sm font-medium text-red-500" key={index}>
            {error}
          </p>
        </div>
      ))}
      <Button onClick={handleRegister}>로그인</Button>
    </Container>
  );
};

export default LoginForm;
