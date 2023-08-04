import { instance } from "./index";

// 회원가입
// join + POST 형식
export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

// 로그인
// login + POST 형식
export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};