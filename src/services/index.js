import axios from "axios";
import { useNavigate } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
  baseURL: staticServerUrl + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response; // 성공적인 응답은 그대로 반환
  },
  (error) => {
    const navigate = useNavigate();
    if (error.response.status === 404) {
      navigate("/404"); // 404 페이지 경로로 이동
    } else if (error.response.status >= 500) {
      // 서버 에러 (500 이상의 상태 코드)
      throw new Error("Server Error");
    } else if (error.response.status >= 400) {
      // 클라이언트 에러 (400 이상의 상태 코드)
      throw new Error("Client Error");
    } else if (error.response.status >= 300) {
      // 리다이렉션 에러 (300 이상의 상태 코드)
      throw new Error("Redirection Error");
    }
  }
);