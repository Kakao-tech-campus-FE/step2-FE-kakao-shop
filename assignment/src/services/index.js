import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // production level 에서는 env에서 넣어주어야함(보안 관련)
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
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
        // alert(response.data.error.message);
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
