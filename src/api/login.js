import instance from "./instance";

const postLogin = (user) => {
  return instance.post(`/login`, {
    email: user.email,
    password: user.password,
  });
};

export default postLogin;
