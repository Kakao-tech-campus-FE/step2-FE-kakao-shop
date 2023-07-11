export const comma = (num) => {
  if (num === null || num === undefined) {
    return 0;
  }

  if (typeof num === "number" && isNaN(num)) {
    return 0;
  }

  if (typeof num === 'string') {
    num = parseInt(num);
  }

  
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}