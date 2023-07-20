import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("token=");
  console.log(token);
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
    return Promise.reject(error.response);
  }
);
