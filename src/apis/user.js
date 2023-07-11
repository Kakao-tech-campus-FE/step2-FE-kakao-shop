import { instance } from "./index";

// 이메일 중복 확인 요청
export const check = (data) => {
  const { email } = data;
  return instance.post("/check", { email });
};

// 회원가입 요청
export const register = (data) => {
  // 요청에 맞지 않는 데이터가 들어오는 것을 방지하기 위한 구조분해할당
  const { email, password, username } = data;
  return instance.post("/join", { email, password, username });
};

// 로그인 요청
export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
