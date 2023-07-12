export const convertToPrice = (num) => {
  if (typeof num === "string") num = parseInt(num);
  if (typeof num !== "number" || isNaN(num)) return "0원";
  return `${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
};
