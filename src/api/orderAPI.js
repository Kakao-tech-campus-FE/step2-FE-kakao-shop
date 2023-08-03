import instance from "@/api/instance.js";
import API from "@/constants/API.js";

const saveOrder = async () => {
  return instance({
    url: API.ORDERS.SAVE,
    method: "POST",
  });
};

const getOrderResult = async ({ orderId }) => {
  return instance({
    url: API.ORDERS.GET + orderId,
    method: "GET",
  });
};

export default { saveOrder, getOrderResult };
