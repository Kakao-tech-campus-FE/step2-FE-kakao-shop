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
    config.headers["Authorization"] = token;
  }
  return config;
});

// middleware
instance.interceptors.response.use(
  (response) => {
    window.alert("환영합니다 🥳");
    window.location.href = "/";
    return response;
  },
  (error) => {
    if (error.response.data.success === false) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        window.alert(error.response.data.error.message);
        return Promise.resolve();
      }
      window.location.href = "/login";
      window.alert(error.response.data.error.message);
    }
    return Promise.reject(error);
  }
);

export const register = (data) => {
  const { email, password, username } = data;
  return instance
    .post("/join", { email, password, username })
    .then((response) => response.data);
};

export const login = (data) => {
  const { email, password } = data;
  return instance
    .post("/login", { email, password })
    .then((response) => {
      if (response.data.success) {
        return {
          email: email,
          token: response.headers.authorization,
        };
      } else {
        throw new Error("로그인에 실패했습니다.");
      }
    })
    .catch((error) => {
      throw new Error("로그인에 실패했습니다.");
    });
};
