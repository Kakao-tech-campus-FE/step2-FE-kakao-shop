import { instance } from "./index";

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
