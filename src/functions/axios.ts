import axios, { AxiosResponse } from "axios";
import { getAuth } from "@/functions/auth";
import { ERROR } from "@/assets/error.ko";

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
  const token = getAuth();
  if (!token) {
    alert(ERROR.NOT_LOGIN);
    window.location.href = "/signin";
  }

  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

authAxios.interceptors.response.use(responseMiddleware, (error) => {
  if (error.response.status === 500) {
    console.error(error.response.data.error.message);
    alert(`${ERROR.UNKNOW_ERROR} ${ERROR.CONTECT_ADMIN}`);
    window.location.href = "/signin";
  }

  if (error.response.status === 401) {
    console.error(error.response.data.error.message);
    alert(ERROR.NOT_LOGIN);
    window.location.href = "/signin";
  }
  if (error.response.status === 400) {
    console.error(error.response.data.error.message);
    alert(ERROR.NOT_LOGIN);
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
      responseErrorMessage ?? `${ERROR.UNKNOW_ERROR}: ${error.response.status}`;
  }
  return error.response ?? { message: ERROR.UNKNOW_ERROR, status: 400 };
});

export { authAxios, commonAxios };
