import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", //http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com",
  timeout: 1000,
  header: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem('token'),
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
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
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};

export default {
  register,
  login,
};