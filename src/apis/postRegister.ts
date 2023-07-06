import AxiosInstance from "@utils/Instance";

interface userData {
  email: string;
  password: string;
  username: string;
}

export const postRegister = async (data: userData) => {
  const { email, password, username } = data;

  const response = await AxiosInstance.post("/join", {
    email,
    password,
    username,
  });
  return response;
};
