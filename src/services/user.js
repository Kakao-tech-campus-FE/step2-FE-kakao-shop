import { instance } from "./index";

export const register = (data) => {
  const { email, password, username } = data;
  return instance
    .post("/join", { email, password, username })
    .then((response) => response.data);
};

export const login = (data) => {
  const { email, password } = data;
  return instance
    .post("/login", { email, password })
    .then((response) => {
      if (response.data.success) {
        window.alert("환영합니다 🥳");
        window.location.href = "/";
        return {
          email: email,
          token: response.headers.authorization,
        };
      } else {
        throw new Error("로그인에 실패했습니다.");
      }
    })
    .catch((error) => {
      throw new Error("로그인에 실패했습니다.");
    });
};
