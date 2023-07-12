import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  haeders: {
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
    return response;
  },
  (error) => {}
);
