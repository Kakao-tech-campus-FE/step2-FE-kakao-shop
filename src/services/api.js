import axios from "axios";
import { Route, redirect } from "react-router-dom";

const emailReg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; 
const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*-=])(?=.*[0-9]).{8,20}$/;

// AXIOS 인스턴스 선언
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000, // 보다 나은 사용자 경험을 위해 timeout 추가
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터: 요청/응답을 보내거나 받기 전에 가로채서 처리하는 역할
// 요청에 대한 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");
    console.log("request:");
    console.log(config.data.email);
    // if(emailReg.test(config.data.email) == false)
    //   alert("이메일 형식으로 작성해주세요.");
    // else if(passwordReg.test(config.data.password) == false)
    //   alert("영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답에 대한 인터셉터 추가
// response.use는 middleware를 의미할 가능성이 높음
instance.interceptors.response.use(
  (response) => {
    console.log("response: ");
    // 루트로 이동
    // window.location.href = '/';
    console.log(response);
    return response;
  },
  (error) => {
    console.log("response error: ");
    console.log(error);
  }
);

// 회원가입
// 외부로부터 데이터를 받아 baseURL에 "/join"을 붙여 POST 형식으로 보낸다.
export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

// 로그인
// 외부로부터 데이터를 받아 baseURL에 "/login"을 붙여 POST 형식으로 보낸다.
export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
