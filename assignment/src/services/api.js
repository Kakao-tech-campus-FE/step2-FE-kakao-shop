import axios from "axios";
import { response } from "express";

const instance = axios.create({
  // api요청을 보낼 수 있다.
  baseURL: process.env.local.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    // HTTP 헤더설정
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  //localStorage에서 "token"을 가져와 요청의 헤더에 "Authorization" 헤더를 추가
  if (token) {
    //"Bearer {token}" 형식, 인증된 사용자를 나타내는 토큰을 요청에 포함.
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// middleware : 요청을 받을 때 중간에 참여, 처리하는 proxy 서버
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {}
);

// 백엔드로 보내는 회원가입 요청
const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

export default register;
// if(error.response.status === 401){
//     localStorage.removeItem("token");
//     // 사용자를 로그인 페이지로 리디렉션
//     window.location.href="/login";
//     // 정상처리
//     return Promise.resolve();
// }
// // 명시적인 에러보내기
// return Promise.reject(error.response)
