import { instance } from "./index";

export const checkEmail = (email) => {
  return instance.post("/check", { email });
};

export const signUp = (data) => {
  const { email, username, password } = data;

  return instance.post("/join", {
    email,
    username,
    password,
  });
};

export const login = (data) => {
  const { email, password } = data;

  return instance.post("/login", {
    email,
    password,
  });
};
