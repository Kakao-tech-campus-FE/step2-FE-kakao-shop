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
    config.headers["Authorization"] = token;
  }
  return config;
});

// middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
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
