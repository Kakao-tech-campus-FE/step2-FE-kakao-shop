import instance from "./instance";

const addToCart = (quantityList) => {
  const postList = [];
  for (const item of quantityList) {
    if (item.quantity > 0) {
      postList.push({
        optionId: item.id,
        quantity: item.quantity,
      });
    }
  }

  return instance.post("/carts/add", postList);
};

export default addToCart;
