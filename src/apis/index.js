import axios from "axios";

export default class ApiInstance {
  constructor(baseURL, contentType) {
    this.instance = axios.create({
      baseURL,
      timeout: 1000 * 5,
      headers: {
        "Content-Type": contentType,
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
