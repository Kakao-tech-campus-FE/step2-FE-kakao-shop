import instance from "./instance";

const postCheck = (user) => {
  return instance.post(`/check`, {
    email: user.email,
  });
};

const postJoin = (user) => {
  return instance.post(`/join`, {
    email: user.email,
    password: user.password,
    username: user.username,
  });
};

export { postCheck, postJoin };
