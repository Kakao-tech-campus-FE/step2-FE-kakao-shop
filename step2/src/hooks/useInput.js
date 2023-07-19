import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../modules/isLoggedIn";

import { validateSignup, validateLogin } from '../constants/validate';
import { signup, login } from "../services/user";
import { setCookie } from "../constants/cookie";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }))
  };

  const dispatch = useDispatch();

  const handleOnClick = async (method) => {
    console.log("handleOnClick 호출");
    if (method === "signup" && validateSignup(value)) {
      
      // 회원가입 메서드일 경우
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

      // 로그인 메서드일 경우
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
          dispatch(setLoggedIn(true))
          navigate("/");
        } else {
          console.log("로그인2", response)
          window.alert(`로그인 실패! (${error.message})`);
        }
      } catch (error) {
        const e = error.data.error
        window.alert(`로그인 실패 (${e.message})`);
      }
    }
  };

  return { value, handleOnChange, handleOnClick };
};

export default useInput;