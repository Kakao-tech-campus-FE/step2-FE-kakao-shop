import axios from "axios";

export const instance = axios.create({
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

// middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorstatus = error.response.status;
    if (errorstatus >= 300 && errorstatus <= 399) {
      return Promise.reject(new Error("300번대 오류: " + errorstatus));
    } else if (errorstatus >= 400 && errorstatus <= 499) {
      return Promise.reject(new Error("400번대 오류: " + errorstatus));
    } else if (errorstatus >= 500 && errorstatus <= 599) {
      return Promise.reject(new Error("500번대 오류: " + errorstatus));
    }
  }
);