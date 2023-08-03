import axios from "axios";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
  baseURL: staticServerUri + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 전체 오류날 때 지워보기
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    // return Promise.reject(error.response);
    console.log("errrrrrrr", error);
    return Promise.reject(error);
  }
);
