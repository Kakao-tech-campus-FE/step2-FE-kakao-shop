import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/users";
import { setToken, setUser } from "../../store/slices/userSlice";
import { Link } from "react-router-dom";

import "../../styles/organisms/LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // use customhook : (useInput)
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  // login error value
  const [error, setError] = useState("");

  // handle for login
  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const response = await login({ email, password }); //use apis and recieve response
      const token = response?.headers?.authorization;
      const user = response.data;

      const expirationTime = new Date().getTime() + 60 * 60 * 1000; //expiration time setting, 60min
      user.expirationTime = expirationTime;
      user.email = value.email;

      dispatch(setUser(user)); // redux, exec setUser , store expirationTime, email
      localStorage.setItem("user", JSON.stringify(user)); // save at localStorage
      dispatch(setToken(token));
      localStorage.setItem("token", token);
      navigate("/"); // login success then go to home
    } catch (error) {
      setError("로그인에 실패했습니다.");
    }
  };

  return (
    <Container className="w-1/2 h-full block align-middle border rounded border-gray-light p-16">
      <InputGroup
        className=" w-full block leading-4 my-1 break-words  "
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        className=" w-full block leading-4 my-1 break-words "
        id="password"
        type="password"
        name="password"
        placeholder="**********."
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        className="w-full h-9 rounded bg-yellow-500 mt-3"
        onClick={() =>
          handleLogin({
            email: value.email,
            password: value.password,
          })
        }
      >
        로그인
      </Button>
      {error && <p>{error}</p>}
      <Link to="../register">회원가입</Link>
    </Container>
  );
};

export default LoginForm;
