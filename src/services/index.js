import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // production level 에서는 env에서 넣어주어야함(보안 관련)
  timeout: 1000, // 타임아웃이 없으면 무한정 wait가 걸려버릴 수도 있다!
  headers: {
    'Content-Type': 'application/json', // 서버단에서 이런 형태를 많이써서, 프론트단에서 쏴줄 때 이렇게 많이 쓴다.
  },
});

instance.interceptors.request.use((config) => {
  const tokenObject = JSON.parse(localStorage.getItem('user'));
  if (tokenObject) {
    config.headers.Authorization = `${tokenObject.value}`;
  }
  return config;
});
instance.interceptors.response.use(
  (response) => {
    // 성공적인 응답 처리
    return response;
  },
  (error) => {
    // 에러 응답 처리
    const { response } = error;
    if (response) {
      // 상태 코드에 따른 처리
      if (response.status >= 300 && response.status < 400) {
        console.error('Redirection:', response.data.error.message);
      } else if (response.status >= 400 && response.status < 500) {
        alert(response.data.error.message);
        console.error('Client Error:', response.data.error.message);
      } else if (response.status >= 500) {
        console.error('Server Error:', response.data.error.message);
      } else {
        console.error('Unhandled Error:', response.data.error.message);
      }
    } else {
      // 네트워크 오류 등의 처리
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default instance;

// // response 단에서 error의 처리
// // 2개의 파라미터 - 정상 처리 & 에러 처리
// // middleware(중간에 참여해서 처리해주는 일종의 프록시 서버같은 역할을 수행)
// // use -> middleware 처럼 동작할 것이다!(일종의 관습)(대부분의 미들웨어는 use 라는 키워드를 통해서 선언된다)
// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error.response);
//     }
// )

// 백엔드 요청!
// 데이터 객체를 정확히 명시해주면 좋다. 데이터가 무엇을 의미하는지 알 수 있게!
// 데이터 객체에 엉뚱한 내용이 들어가는것을 방지할 수 있다.
