import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSignup, validateLogin } from '../constants/validate';
import { signup, login } from "../components/services/api";
import { setCookie } from "../constants/cookie";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }))
  };

  const handleOnClick = async (method) => {
    if (method === "signup" && validateSignup(value)) {
      try {
        const response = await signup({
          email: value.email,
          username: value.username,
          password: value.password,
        });

        const { success, error } = response.data;

        if (success) {
          window.alert("회원가입 성공");
          navigate("/login");
        } else {
          window.alert(`회원가입 실패! (${error.message})`);
        }
      } catch (error) {
        const e = error.data.error
        window.alert(`회원가입 실패 (${e.message})`);
      }
    } else if (method === "login" && validateLogin(value)) {
      try {
        const response = await login({
          email: value.email,
          password: value.password,
        });

        const { success, error } = response.data;
        console.log("로그인1", response)

        if (success) {
          const token = response.headers["authorization"];
          console.log("로그인 성공 jwt:", token);
          setCookie("accessToken", token, 1)
          navigate("/");
        } else {
          console.log("로그인2", response)
          window.alert(`로그인 실패! (${error.message})`);
        }
      } catch (error) {
        const e = error.data.error
        window.alert(`로그인 실패 (${e.message})`);
      }
    } else {
      window.alert("잘못된 접근입니다.");
    }
  };

  return { value, handleOnChange, handleOnClick };
};

export default useInput;