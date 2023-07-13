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
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  function (response) {
    const successMessage = response.config.url.includes("/join")
      ? "회원가입 성공!"
      : "로그인 성공!";
    alert(successMessage);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
