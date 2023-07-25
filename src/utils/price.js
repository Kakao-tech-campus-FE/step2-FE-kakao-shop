const strPrice = (number) => {
  if (number === undefined) return;
  const strNumber = number.toString();
  return strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
};

export default strPrice;
