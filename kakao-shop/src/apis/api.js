import axios from "axios";

// 강의 참고
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000, // api에 문제가 생겼을 때 무한으로 기다리게 하면 사용자 경험이 낮아진다
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// middleware -- use를 사용하는 것들은 대개 미들웨어처럼 동작한다
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //
  }
);

export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  }); // join으로 보내준다
};

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
