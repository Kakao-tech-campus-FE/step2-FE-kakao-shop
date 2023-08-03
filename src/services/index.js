import axios from "axios";
import { useNavigate } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
  baseURL: staticServerUri + process.env.REACT_APP_API_URL,
  timeout: 5000, // 보다 나은 사용자 경험을 위해 timeout 추가
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // 여기서 요청을 취소할 수 없어 비워둠
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorCode = error.response.status;
    if (errorCode >= 100 && errorCode <= 199) {
      throw Error("100번대 상태 코드 수신: " + errorCode)
    } else if (errorCode >= 200 && errorCode <= 299) {
      throw Error("200번대 상태 코드 수신: " + errorCode)
    } else if (errorCode >= 300 && errorCode <= 399) {
      throw Error("300번대 상태 코드 수신: " + errorCode)
    } else if (errorCode >= 400 && errorCode <= 499) {
      if(errorCode === 404) {
        const navigate = useNavigate();
        navigate(staticServerUri + '/404');
      }
      throw Error("400번대 상태 코드 수신: " + errorCode)
    } else {
      throw Error("500번대 상태 코드 수신: " + errorCode)
    }
  }
);
