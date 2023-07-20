export const comma = (num) => {
  const commaReg = /\B(?=(\d{3})+(?!\d))/g;

  if (num === undefined || num === null) {
    return 0;
  }

  if (typeof num === "number" && isNaN(num)) {
    return 0;
  }

  if (typeof num === "string") {
    num = parseInt(num);
  }
  return num.toString().replace(commaReg, ",");
};
