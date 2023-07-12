import instance from "./instance.js";
import API from "../constants/API.js";

const signIn = async (data) => {
  const { email, password } = data;

  return await instance({
    url: API.AUTH.LOGIN,
    method: "POST",
    data: { email: email, password: password },
  });
};

const checkEmailDuplicate = async (email) => {
  return await instance({
    url: API.AUTH.CHECK,
    method: "POST",
    data: { email: email },
  });
};

const signUp = async (data) => {
  const { email, password, username } = data;

  return await instance({
    url: API.AUTH.JOIN,
    method: "POST",
    data: {
      email: email,
      password: password,
      username: username,
    },
  });
};

export default { signIn, checkEmailDuplicate, signUp };
