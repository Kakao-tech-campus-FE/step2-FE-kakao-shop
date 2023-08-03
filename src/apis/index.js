import axios from "axios";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
  baseURL: staticServerUri + process.env.REACT_APP_API_URL,
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
    if (error.response.data.success === false) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        return Promise.resolve();
      }
    }

    return Promise.reject(error);
  }
);
