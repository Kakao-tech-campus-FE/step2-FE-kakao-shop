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
    // 응답 데이터 처리
    return config;
  },
  (error) => {
    // 오류 응답 처리
    // error.response.status 값(400, 401 등)에 따라 수행할 동작 지정
    return Promise.reject(error);
  }
);

export default instance;
