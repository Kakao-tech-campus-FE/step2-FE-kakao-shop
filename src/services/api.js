import axios from "axios";
// axios.defaults.withCredentials = true; // withCredentials 전역 설정
const staticServerUri = process.env.REACT_APP_PATH || "";
// api 요청보내고, 응답헤더로 받은 토큰을 로컬스토리지에 저장
export const instance = axios.create({
  baseURL: staticServerUri + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
// 응답 인터셉터
instance.interceptors.response.use((response) => {
  // 응답 데이터가 있는 작업 수행
  let accessToken = response.headers["authorization"];
  console.log("access 토큰 :", accessToken);

  if (accessToken) {
    localStorage.setItem("access_token", accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  return response;
});

//middleware로 에러처리
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 로컬스토리지에 저장한 토큰을 꺼내서 , 요청헤더담아 보냄
export const authorizationInstance = axios.create({
  baseURL: staticServerUri + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: localStorage.getItem("access_token"),
  },
});

// 요청 인터셉터 추가
authorizationInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
