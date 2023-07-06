import axios from "axios";

const Axiosinstance = axios.create({
  baseURL:
    "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

Axiosinstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      config,
      response: { status, data },
    } = error;
    if (status === 400) {
      const { message } = data.error;
      return Promise.reject(message);
    }
  }
);

export default Axiosinstance;
