import axios from "axios";
import { getCookie } from "../constants/cookie";

const staticServerUri = process.env.REACT_APP_PATH || "";

const instance = axios.create({
  baseURL:staticServerUri + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = getCookie("accessToken");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      alert("네트워크 에러가 발생했습니다.");
    }
    return Promise.reject(error);
  }
);

export default instance;
