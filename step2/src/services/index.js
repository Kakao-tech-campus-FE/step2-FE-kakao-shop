import axios from "axios";

const instance = axios.create({
  baseURL: "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/",
  timeout: 1000,
  headers: {
    "Content-Type":"application/json",
  }
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
    if (error.response) {
      switch (error.response.status) {
        case 400:
          alert("잘못된 요청입니다.");
          break;
        case 401:
          localStorage.removeItem("token");
          window.location.href = "/login";
          break;
        case 403:
          alert("접근이 거부되었습니다.");
          break;
        case 404:
          alert("해당 리소스를 찾을 수 없습니다.");
          break;
        case 500:
          alert("서버 내부 에러가 발생했습니다.");
          break;
        default:
          alert("알 수 없는 에러가 발생했습니다.");
      }
    } else {
      alert("네트워크 에러가 발생했습니다.");
    }
    return Promise.reject(error);
  }
);

export default instance;
