import ApiInstance from "./index";
import { getCookie } from "../utils/cookie";

const staticServerUri = process.env.REACT_APP_PATH || "";
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
  staticServerUri + "/api",
  "application/json"
);

export default orderInstance;
