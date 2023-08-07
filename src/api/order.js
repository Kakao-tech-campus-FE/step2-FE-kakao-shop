import instance from "./instance";

export const getOrder = async () => {
  const response = await instance.get(`/carts`);
  const cartDataToOrder = (collections) => {
    let totalQ = 0;
    const newProductData = collections
      ?.map((collection) => ({
        productName: collection.productName,
        options: collection.carts
          ?.map((optionItem) => {
            totalQ += optionItem.quantity;
            return optionItem.quantity > 0
              ? {
                  id: optionItem.option.id,
                  optionName: optionItem.option.optionName,
                  quantity: optionItem.quantity,
                  price: optionItem.option.price,
                }
              : undefined;
          })
          .filter((e) => e),
      }))
      .filter((arr) => arr.options.length > 0);

    return { products: newProductData, totalQuantity: totalQ };
  };

  return cartDataToOrder(response.products);
};

export const getOrderResult = async (id) => {
  const response = await instance.get(`/orders/${id}`);
  const dataToOrder = (collections) => {
    const newProductData = collections
      ?.map((collection) => ({
        productName: collection.productName,
        options: collection.items
          ?.map((optionItem) =>
            optionItem.quantity > 0 ? optionItem : undefined
          )
          .filter(Boolean),
      }))
      .filter((arr) => arr.options.length > 0);
    return newProductData;
  };
  return {
    products: dataToOrder(response.products),
    totalPrice: response.totalPrice,
  };
};

export const saveOrder = () => {
  return instance.post(`/orders/save`);
};
