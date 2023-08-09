import ApiInstance from "./index";
import { getCookie } from "../utils/cookie";

const staticServerUri = process.env.REACT_APP_PATH || "";
class CartInstance extends ApiInstance {
  constructor(baseURL, contentType) {
    super(baseURL, contentType);
    this._initializeRequestInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest);
  };

  _handleRequest = (config) => {
    const accessToken = getCookie("accessToken");
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  };

  /**
   * 장바구니 담기
   * @param {object} payload - [{ "optionId" : 1, "quantity" : 5 }] 형태의 배열
   * @returns {object} { success, response, error} 형태의 응답
   */
  addCart = (payload) => {
    return this.instance.post("/carts/add", payload);
  };

  updateCart = async (payload) => {
    const response = await this.instance.post("/carts/update", payload);

    return response;
  };

  getCart = async () => {
    try {
      const response = await this.instance.get("/carts");
      return response.data.response;
    } catch (err) {
      console.log(err);
    }
  };
}

const cartInstance = new CartInstance(
  staticServerUri + "/api",
  "application/json"
);

export default cartInstance;
