import instance from "./instance";

export const addToCart = (postData) => {
  return instance.post(`/carts/add`, postData);
};

export const getCarts = async () => {
  const response = await instance.get(`/carts`);

  const validCollections = new Set();
  let totalQuantity = 0;

  for (const product of response.products) {
    let collectionQuantity = 0;
    for (const option of product.carts) {
      collectionQuantity += option.quantity;
    }
    if (collectionQuantity > 0) {
      validCollections.add(product.id);
    }
    totalQuantity += collectionQuantity;
  }
  return [
    response.products,
    response.totalPrice,
    totalQuantity,
    validCollections,
  ];
};

export const updateCart = (updateList) => {
  return instance.post("/carts/update", updateList);
};
