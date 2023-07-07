import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});

instance.interceptors.request.use(
  (config) => {
    // 요청 보내기 전 수행할 일
    return config;
  },
  (error) => {
    // 오류 요청을 보내기 전 수행할 일
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;
