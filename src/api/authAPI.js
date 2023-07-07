import instance from "./instance.js";

const signIn = async (data) => {
  const { email, password } = data;

  return await instance({
    url: "join",
    method: "POST",
    data: { email: email, password: password },
  });
};

export default { signIn };
