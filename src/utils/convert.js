export const comma = (num) => {
  // Truthy, Falsy로만 판별하면 type을 검사하지 못함
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
