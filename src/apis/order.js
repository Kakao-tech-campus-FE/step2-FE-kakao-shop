import ApiInstance from "./index";
import { getCookie } from "../utils/cookie";

class OrderInstance extends ApiInstance {
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

  order = async () => {
    return await this.instance.post("/orders/save");
  };

  confirmOrder = async (id) => {
    return await this.instance.get(`/orders/${id}`);
  };
}

const orderInstance = new OrderInstance(
  process.env.REACT_APP_API_URL,
  "application/json"
);

export default orderInstance;
