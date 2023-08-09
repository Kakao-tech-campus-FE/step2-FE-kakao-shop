import axios from "axios";
import { staticServerUri } from "../constants/serverUri";

export const instance = axios.create({
  baseURL: staticServerUri + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
instance.interceptors.request.use((config) => {
  if (config.url.includes("/carts") || config.url.includes("/orders")) {
    const token = JSON.parse(localStorage.getItem("user")).token;
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
  }
  return config;
});

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    const statusCode = response.status;
    if (200 <= statusCode && statusCode < 300) return response;
  },
  (error) => {
    const statusCode = error.response.status;
    switch (statusCode) {
      case 300:
        console.error("URI가 변경되었습니다.");
        break;
      case 302:
        console.error("URI가 일시적으로 변경되었습니다.");
        break;
      case 400:
        console.error("잘못된 형식의 입력입니다.");
        break;
      case 401:
        console.error("인증되지 않은 사용자입니다.");
        break;
      case 403:
        console.error("접근할 권한이 없습니다.");
        break;
      case 404:
        break;
      case 500:
        console.error("서버에 에러가 있습니다.");
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);
