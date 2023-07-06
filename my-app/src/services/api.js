import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 400) {
      return Promise.reject(error.response.data.error.message);
    }
    return Promise.reject(error.response);
  }
);

export const signup = (data) => {
  const { username, email, password } = data;
  return instance.post("/join", { username, email, password });
};

export const signin = (data) => {
  const { email, password } = data;
  return instance.post("/login", { email, password });
};

export const checkDuplication = (data) => {
  const { email } = data;
  return instance.post("/check", { email });
};
