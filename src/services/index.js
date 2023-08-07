import axios from "axios";

const staticServerUri = process.env.REACT_APP_PATH || "";

const instance = axios.create({
  baseURL: staticServerUri + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 400) {
      console.log("요청 변수 확인");
    } else if (error.response && error.response.status === 401) {
      console.log("인증 실패");
    } else if (error.response && error.response.status === 403) {
      console.log("호출 금지");
    } else if (error.response && error.response.status === 404) {
      console.log("API 없음");
    } else if (error.response && error.response.status === 405) {
      console.log("메서드 허용 안함");
    } else if (error.response && error.response.status === 500) {
      console.log("서버 오류");
    } else {
      // 기타 에러 처리
    }
  }
);

export default instance;
