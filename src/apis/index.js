import axios from "axios";

export default class ApiInstance {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      // axios 요청을 했을때 오류를 보내주지 않거나, 대기시간이 오래 걸리는 경우 timeout을 통해 요청을 중단하고 처리할 수 있다.
      timeout: 1000 * 5,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  _handleResponse = (response) => response;
  _handleError = (error) => Promise.reject(error);
}

export const instance = new ApiInstance();
