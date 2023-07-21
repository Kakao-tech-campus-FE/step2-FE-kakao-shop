export const comma = (num) => {
  if (num == null) {
    return 0;
  }

  if (typeof num === "number" && isNaN(num)) {
    return 0;
  }

  if (typeof num === "string") {
    num = parseInt(num);
  }

  return num.toLocaleString();
};

export const discount = (num) => {
  if (num == null) {
    return 0;
  }

  if (isNaN(num)) {
    return 0;
  }

  if (typeof num === "string") {
    num = parseInt(num);
  }

  return (num * 0.8).toFixed(0);
};

export const filterCartData = (data) => {
  const response = data.products.map((product) => ({
    ...product,
    carts: product.carts.filter((cart) => cart.quantity !== 0),
  }));
  const filteredData = response.filter((d) => d.carts.length !== 0);
  return filteredData;
};
