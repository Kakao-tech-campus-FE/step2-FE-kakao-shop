import { useRedirect } from "@hooks/useRedirect";
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      config,
      response: { status, data },
    } = error;
    if (status === 400 || status === 401 || status === 404) {
      const { message } = data.error;
      return Promise.reject({ message, status });
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
