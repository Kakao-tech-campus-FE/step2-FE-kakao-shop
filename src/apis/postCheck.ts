import AxiosInstance from "@utils/Instance";

export const postCheck = async (email: string) => {
  const response = await AxiosInstance.post("/check", {
    email,
  });
  return response;
};
