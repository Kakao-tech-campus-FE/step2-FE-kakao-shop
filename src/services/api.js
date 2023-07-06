import axios from 'axios'

const instance = axios.create({
  // baseURL을 하드코딩 하는 것은 Bad code -> env 환경변수에 담아 이용
  // 왜? 1. 동적인 환경 관리(개발과 production 단계에서의 사용 api주소가 다를 수 있다.), 2. 보안, 3. 유지 보수 및 배포에 용이(소스코드 수정 없이 env만 수정)
  //baseURL: "http;//localhost:8080"
  baseURL: process.env.REACT_APP_API_URL,
  // 꼭 timeout 세팅을 해줘야 한다. 무한정 요청을 기다릴 수 없기 때문
  timeout: 1000 * 5,
  headers: {
    "Content-Type" : "application/json"
  }
})

// Axios의 인터셉터를 사용하여 모든 요청 전에 실행될 함수를 등록합니다.
// 요청 전에 실행되어 헤더에 인증 토큰을 추가하는 역할을 수행합니다.
instance.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }
)

// response 단에서 에러 처리
// 참고 : use 명령은 middleware 처럼 동작
instance.interceptors.response.use(
  // interceptor의 response에서 사용되는 use는 2개의 파라미터가 들어가는데
  // 1. 정상 콜백
  (response) => {
    window.location.href = "/"; // HomePage로 리디렉션
    return response;
  },
  // 2. 에러가 일어났을때 콜백
  (error) => {
    // 아래와 같은 방법으로 에러 처리를 한다~~ 참고하래
    const errorStatus = error.response.status;
    
    if(errorStatus === 400 || errorStatus === 401) {
      // localStorage.removeItem("token");
      // window.location.href = "/login";
      console.log("status 400, 401")
      return Promise.reject(error.response.data.error);
    }
    console.log("status ELSE!!!!!!!!")
    return Promise.reject(error);
  }
)

// 백엔드 요청 작성
// 1. register 요청
export const register = (data) => { // data 대신 {email, password, username} 처럼 데이처 입력에서 필터링 할 수도 있다. 근데 이번엔 이렇게 진행한대
  const { email, password, username } = data; // data에서 email, username을 받아서 아무 데이터나(객체에 들어있는 email, username처럼 지정되지 않은) api 요청이 될 수 없도록 처리
  return instance.post("/join", {
    email,
    password,
    username,
  });
}

// 2. login 요청
export const login = (data) => { 
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
}