import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
});

// middleware
instance.interceptors.response.use(
  (response) => {
    console.log(response.data); // API로부터 객체 형태의 응답
    return response;
  },
  (error) => {
    console.log(error.data);
    return Promise.reject(error);
  }
);

export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

export const login = (data) => {
  const { email, password, username } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
