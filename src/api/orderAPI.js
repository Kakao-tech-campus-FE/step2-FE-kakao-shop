import instance from "@/api/instance.js";
import API from "@/constants/API.js";

const postOrder = async () => {
  return instance({
    url: API.ORDERS.POST,
    method: "POST",
  });
};

const getOrderResult = async ({ orderId }) => {
  return instance({
    url: API.ORDERS.GET + orderId,
    method: "GET",
  });
};

export default { postOrder, getOrderResult };
