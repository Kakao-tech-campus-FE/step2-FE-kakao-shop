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
      if (error.response) { // 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭 수정 필요
        alert("접근이 거부되었습니다.")
      }
      else{
        alert("네트워크 연결을 확인하세요.")
      }
      return Promise.reject(error);
    }
  );

export default instance