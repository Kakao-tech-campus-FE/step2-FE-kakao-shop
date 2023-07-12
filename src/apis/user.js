import { instance } from "./instance.js";

export async function checkEmailReq(data) {
  const { email } = data;
  return await instance.post("/check", {
    email: email,
  });
}

export async function signUpReq(data) {
  const { email, username, password } = data;
  return await instance.post("/join", {
    email: email,
    password: password,
    username: username,
  });
}

export async function logInReq(data) {
  const { email, password } = data;
  return await instance.post("/login", {
    email: email,
    password: password,
  });
}
