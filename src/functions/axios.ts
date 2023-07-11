import axios from "axios";
import { getAuth } from "@/functions/auth";

const authAxios = axios.create({
  baseURL: import.meta.env.VITE_KAKAO_STORE_URL,
});

authAxios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Authorization"] = `Bearer ${getAuth()}`;
  return config;
});

const commonAxios = axios.create({
  baseURL: import.meta.env.VITE_KAKAO_STORE_URL,
});

commonAxios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

export { authAxios, commonAxios };
