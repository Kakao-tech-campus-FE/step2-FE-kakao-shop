import axios from "axios";
// axios.defaults.withCredentials = true; // withCredentials 전역 설정

// api 요청보내고, 응답헤더로 받은 토큰을 로컬스토리지에 저장
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    let accessToken = response.headers["authorization"];
    console.log("access 토큰 :", accessToken);

    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    return response;
  }
  // (error) => {
  //   // 여기서 에러 처리를 원하면 추가할 수 있습니다.
  //   return Promise.reject(error);
  // }
);

// 로컬스토리지에 저장한 토큰을 꺼내서 , 요청헤더담아 보냄
export const authorizationInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("access_token"),
  },
});

// authorizationInstance.interceptors.request.use((response) => {
//   let accessToken = response.headers["authorization"];
//   return response;
// });

//middleware로 에러처리
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {}
);
