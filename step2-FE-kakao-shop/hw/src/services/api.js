import axios from "axios";

const instance = axios.create({
  // 여기에 직접 스트링으로 넣으면 안됨 근데 안됨
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// use는 middleware를 의미하는 경우가 많다
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  // 첫번째 인수는 정상, 두번째 인수는 에러
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 백엔드 요청
export const register = (data) => {
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
