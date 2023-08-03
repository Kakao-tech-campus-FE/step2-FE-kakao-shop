import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  return config;
});

instance.interceptors.response.use(
  (response) => {
    // console.log("Axios Interceptors Data", response);
    return response;
  },
  (error) => {
    // console.log("Axios Interceptors Error", error);
    // TimeoutError 발생 시 처리
    if (error.code === "ECONNABORTED") {
      console.error("요청이 시간 초과되었습니다.");
    }
    const status = error.response.status;
    // Client단 에러 처리
    if (status === 401) {
      localStorage.clear();
    } else if (status === 404) {
      window.location.href = "/404";
    }
    throw error.response.data.error;
  },
);

// ⭐️ axios.인터셉터
// - then 또는 catch로 처리되기 전에 요청과 응답을 가로챌수 있습니다.

// ⭐️ 에러
// - 401: 로그인 실패나 토큰 만료
// - 404: 페이지 없음
// - 500: 서버 에러 -> 각 api에서 처리: api 요청이 더 필요한 경우 retry수만큼 요청 시도
