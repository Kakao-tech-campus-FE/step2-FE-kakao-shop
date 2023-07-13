import AxiosInstance from "@utils/Instance";

interface userData {
  email: string;
  password: string;
}

export const postLogin = async (data: userData) => {
  const { email, password } = data;
  const response = await AxiosInstance.post("/login", {
    email,
    password,
  });
  return response;
};
