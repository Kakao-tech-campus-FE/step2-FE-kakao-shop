import axios from 'axios';

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL, -> 이렇게 하니까 인식을 못하는 것 같은데...?
  baseURL: "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/", 
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

//middleware
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error.response);
  }
);


export {instance};