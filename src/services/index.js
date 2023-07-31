import axios from "axios";
import { checkStatus } from "../utils/statuscatch";
import { getCookie } from "../store/cookies";

export const instance = axios.create({
  baseURL:
    "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/",
  //process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) instance.defaults.headers.common["Authorization"] = token;
  /*if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }*/
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(error.response);
      checkStatus(error.response);
    }
    return Promise.reject(error);
  }
);
