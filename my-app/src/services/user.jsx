import { instance } from "./index";

export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
  });
};

export const checkEmail = (data) => {
  const email = data.email;
  return instance.post("/check", { email });
};

export const login = (data) => {
  const { email, password, username } = data;
  return instance.post("/login", {
    email,
    password,
  });
};

// token 전달
// response : jwt 토큰 안에 사용자 정보
// jwt expired_at 검증(유효기간)
// expired return 401 status code
// export const profile = () => {
//   return instance.get("/profile");
// };
