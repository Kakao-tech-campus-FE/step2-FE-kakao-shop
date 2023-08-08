import { instance } from "./index";

export const register = async (data) => {
  try {
    const { email, password, username } = data;
    const response = await instance.post("/join", {
      email,
      password,
      username,
    });
    // console.log("Register Api data", response);
    return response;
  } catch (error) {
    console.log("Register Api Error", error);
    throw error;
  }
};

export const login = async (data) => {
  try {
    const { email, password } = data;
    const response = await instance.post("/login", {
      email,
      password,
    });
    // 로그인 성공 시 토큰을 localStorage에 저장
    localStorage.setItem("token", response.headers.authorization);
    // console.log("Login Api data", response);
    return response;
  } catch (error) {
    console.log("Login Api Error", error);
    throw error;
  }
};
