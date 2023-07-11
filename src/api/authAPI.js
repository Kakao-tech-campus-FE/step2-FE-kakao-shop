import instance from "./instance.js";

const signIn = async (data) => {
  const { email, password } = data;

  return await instance({
    url: "login",
    method: "POST",
    data: { email: email, password: password },
  });
};

const checkEmailDuplicate = async (email) => {
  return await instance({
    url: "check",
    method: "POST",
    data: { email: email },
  });
};

const signUp = async (data) => {
  const { email, password, username } = data;

  return await instance({
    url: "join",
    method: "POST",
    data: {
      email: email,
      password: password,
      username: username,
    },
  });
};

export default { signIn, checkEmailDuplicate, signUp };
