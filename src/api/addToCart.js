import instance from "./instance";

const addToCart = (quantityList) => {
  const postList = quantityList.map((item) => {
    if (item.quantity > 0) {
      return {
        optionId: item.id,
        quantity: item.quantity,
      };
    }
  });
  return instance.post(`/carts/add`, postList);
};

export default addToCart;
