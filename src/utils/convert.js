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

// 장바구니에서 quantity 값이 0인 상품들을 걸러내는 함수
export const filterCartData = (data) => {
  const response = data.products.map((product) => ({
    ...product,
    carts: product.carts.filter((cart) => cart.quantity !== 0),
  }));
  const filteredData = response.filter((d) => d.carts.length !== 0);
  return filteredData;
};

// 장바구니에서 quantity 값이 0이 아닌 상품들의 총 개수를 구하는 함수
export const getAllQuantity = (products) => {
  return products.reduce(
    (pre, cur) => pre + cur.carts.reduce((pre, cur) => pre + cur.quantity, 0),
    0
  );
};

export const getAddress = (data) => {
  let fullAddress = data.address;
  let extraAddress = "";

  if (data.addressType === "R") {
    if (data.bname !== "") {
      extraAddress += data.bname;
    }
    if (data.buildingName !== "") {
      extraAddress +=
        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
  }
  return `(${data.zonecode}) ${fullAddress}`;
};
