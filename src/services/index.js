import axios from "axios";

// 원래 api.js였는데 index.js로 이름 변경

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${localStorage.getItem('token')}`,

  }
});

// 요청 인터셉터
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response.status >= 400) {
    //   window.location.href="/signin";
    // } 
    // 아래 두줄은 원래 코드
    // console.log(error);
    // return Promise.reject(error.response.data.error.message);
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          // 장바구니에 물품이 담겨있는데 사용자 정보가 유실된 경우_ 에러캐칭
          // 로그인이 필요한 페이지로 리다이렉트
          window.location.href = "/signin";
          break;
        case 404:
          // 404 Not Found 에러 처리
          alert("404 Not Found");
          break;
        case 500:
          // 500 Internal Server Error 에러 처리
          alert("500 Internal Server Error");
          break;
        default:
          // 기타 에러 처리
          alert("An error occurred:", error.message);
          break;
      }
    }
     else if (error.request) {
      // 요청이 만들어졌지만 응답을 받지 못한 경우
      console.log("No response received:", error.request);
    } else {
      // 요청을 만드는 도중에 문제가 발생한 경우
      alert("An error occurred:", error.message);
    }
    return Promise.reject(error);
  }
);

export const duplicate = (data) => {
  const email = data;
  return instance.post("/check", {
    email,
  });
};




