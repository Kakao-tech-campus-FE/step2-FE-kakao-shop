import axios from "axios";

const staticServerUri = process.env.REACT_APP_PATH || "";

//REACT_APP_API_URL=http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com

const instance = axios.create({
  baseURL: staticServerUri + "/api",
  // baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);

export const register = (data) => {
  const { email, username, password } = data;
  return instance.post("/join", {
    email,
    username,
    password,
  });
};

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
