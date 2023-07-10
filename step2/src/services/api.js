import axios from "axios";

const instance = axios.create({
  baseURL: "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/",
  timeout: 1000,
  headers: {
    "Content-Type":"application/json",
  }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 ) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error.response);
  }
);

export const signup = ( {email, username, password} ) => {
  console.log("회원가입 요청", email, username, password);
  return instance.post("/join", { "email": email, "username": username, "password": password });
};

export const login = ( {email, password }) => {
  console.log("로그인 요청", email, password);
  return instance.post("/login", { "email": email, "password": password });
};
