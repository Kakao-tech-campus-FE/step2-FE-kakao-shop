export const comma = (num) => {
  //comma(10000)을 사용하면 10,000이 반환됨
  if (num === undefined || num === null) {
    return 0;
  }

  if (typeof num === "number" && isNaN(num)) {
    return 0;
  }

  if (typeof num === "string") {
    num = parseInt(num);
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 총액을 계산하는 함수
export const calculateTotalPrice = (carts) => {
  return carts.reduce((acc, cur) => {
    return acc + cur.option.price * cur.quantity;
  }, 0);
};
