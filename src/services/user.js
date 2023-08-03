import { instance } from "./index";

// 회원가입 API 요청
export const register = (data) => {
  // 데이터가 명확히 뭘 받는지 명시
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

// 로그인 API 요청
export const login = async (data) => {
  const { email, password } = data;
  return await instance.post("/login", {
    email,
    password,
  });
};
