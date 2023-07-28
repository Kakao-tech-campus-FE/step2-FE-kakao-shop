import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  haeders: {
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

// middleware
instance.interceptors.response.use(
  (response) => {
    const errorStatus = response.status;
    if (200 <= errorStatus && 300 > errorStatus) return response;
  },
  (error) => {
    const errorStatus = error.response.status;
    switch (errorStatus) {
      case 400:
        console.log("400(Bad Request) : 요청 자체가 잘못되었습니다");
        break;
      case 401:
        console.log(
          "401(Unauthorized) : 인증에 필요한 리소스에 인증 없이 접근했습니다"
        );
        break;
      case 403:
        console.log("403(Forbidden) : 서버가 요청을 거부하였습니다.");
        break;
      case 404:
        window.location.replace("/error");
        break;
      case 408:
        console.log("408(Request Timeout) : 요청 중 시간이 초과되었습니다");
        break;
      case 409:
        console.log(
          "409(Conflict) : 서버가 요청을 수행하는 중에 충돌이 발생했습니다"
        );
        break;
      case 500:
        console.log(
          "500(Internal Server Error) : 서버에 오류가 발생해 작업을 수행할 수 없습니다"
        );
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);
