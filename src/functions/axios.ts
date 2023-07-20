import axios, { AxiosResponse } from "axios";
import { getAuth } from "@/functions/auth";

const responseMiddleware = (response: AxiosResponse) => {
  if (!response.data.response && response.data.error) {
    throw new Error(response.data.error.message);
  }
  return response;
};

const authAxios = axios.create({
  baseURL: import.meta.env.VITE_KAKAO_STORE_URL,
});

authAxios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Authorization"] = `Bearer ${getAuth()}`;
  return config;
});

authAxios.interceptors.response.use(responseMiddleware, (error) => {
  if (error.response.status >= 400) {
    window.location.href = "/signin";
  }
  return error;
});

const commonAxios = axios.create({
  baseURL: import.meta.env.VITE_KAKAO_STORE_URL,
});

commonAxios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

commonAxios.interceptors.response.use(responseMiddleware, (error) => {
  const responseErrorMessage = error.response.data.error.message;

  if (error.response.status >= 400) {
    error.response.message =
      responseErrorMessage ??
      `알 수 없는 오류입니다.: ${error.response.status}`;
  }
  return error.response ?? { message: "알 수 없는 오류입니다.", status: 400 };
});

export { authAxios, commonAxios };
