import { instance } from "./index";

export const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
      email,
      password,
      username,
    });
  };

export const login = async (data) => {
    const { email, password } = data;
    return await instance.post("/login", {
      email,
      password,
    });
  };

// // 토큰만 전달
// export const profile = ()=> {
//     return instance.get("/profile");
// } response, jwt 토큰 안에 사용자 정보가 담김
// jwt decode 리턴, expired_at ( 토큰의 유효시간 검증
//) 