import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Baerer ${token}`;
  }
  return config;
});

// middleware 대부분 미들웨어는 use를 통해 선언.
// 두개의 파라미터 1. 정상작동 2. 에러날 경우 처리
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {}
);

// 백엔드 요청
export const register = (data) => {
  // 데이터가 명확히 뭘 받는지 명시
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
