import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useinput";
import Title from "../atoms/Title";
import logo from "../../images/logoKakaoText.png";
import { login } from "../../services/user";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/VaildationLogin";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmailandPassword,
  logout,
  setTimeoutId,
  clearTimeoutId,
  setToken,
} from "../../store/slices/userSlice";
import { setCookie } from "../../storage/Cookie";

/**
 * 로그인 폼 컴포넌트
 * 이메일과 비밀번호를 입력받아 로그인을 시도하는 컴포넌트
 *
 * @returns {JSX.Element} - 로그인 폼
 */

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email); // user 안에 email에 접근
  const password = useSelector((state) => state.user.password); // user 안에 password에 접근
  const timeoutId = useSelector((state) => state.user.clearTimeoutId); // user 안에 clearTimeoutId에 접근
  const time = 20 * 1000;

  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (timeoutId) {
      const timeout = setTimeout(() => {
        dispatch(logout());
      }, time);

      return () => {
        clearTimeout(timeout);
        dispatch(clearTimeoutId());
      };
    }
  }, [dispatch, timeoutId]);

  const loginreq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        // 정상
        setCookie("token", res.headers.authorization);
        dispatch(
          setEmailandPassword({
            email: value.email,
            password: value.password,
          })
        );
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          dispatch(logout());
        }, time);
        dispatch(setTimeoutId(newTimeoutId));
        dispatch(setToken({ token: res.headers.authorization }));
      })
      .catch((err) => {
        // 에러
        console.log(err);
      });
  };
  const handleRegister = () => {
    const validationErrors = validateForm(value);

    if (!validationErrors) {
      loginreq({
        email: value.email,
        password: value.password,
      });
      navigate("/");
    } else {
      setErrors(validationErrors);
    }
  };
  const inputBoxStyle = `mb-4 rounded-md  bg-white p-1`;
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
      <Button
        onClick={handleRegister}
        className={
          "my-8 w-full rounded bg-yellow-300 px-4 py-3 font-semibold hover:bg-yellow-400"
        }
      >
        로그인
      </Button>
      <Link to="/signup">Sign up</Link>
    </Container>
  );
};

export default LoginForm;
