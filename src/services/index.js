import axios from "axios";
import { useNavigate } from "react-router";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
  baseURL: `${staticServerUri}/api/`,
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
  (response) => {
    return response;
  },
  (error) => {
    const errorstatus = error.response.status;
    if (errorstatus === 401) {
      const navigate = useNavigate();
      alert("회원 정보가 존재하지 않습니다.");
      navigate(staticServerUri + "/login");
    } else if (errorstatus === 404) {
      const navigate = useNavigate();
      navigate(staticServerUri + "/*");
    } else if (errorstatus >= 400 && errorstatus <= 499) {
      return Promise.reject(new Error("400번대 오류: " + errorstatus));
    }
      else if (errorstatus >= 500 && errorstatus <= 599) {
      return Promise.reject(new Error("500번대 오류: " + errorstatus));
    }
  }
);