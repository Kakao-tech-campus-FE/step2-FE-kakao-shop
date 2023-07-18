export const comma = (num) => {
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

export const discount = (num) => {
  if (num === undefined || num === null) {
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
