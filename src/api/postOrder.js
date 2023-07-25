import instance from "./instance";

const postOrder = () => {
  return instance.post(`/orders/save`);
};

export default postOrder;
