import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// 인터셉터
// then 또는 catch로 처리되기 전에 요청과 응답을 가로챌수 있습니다.
// 요청 인터셉터 추가하기 -> 요청이 전달되기 전에 작업 수행
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const register = (data) => {
  // 특정 데이터 명시
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

export default instance;
