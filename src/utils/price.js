const strPrice = (number) => {
  const strNumber = number.toString();

  return strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
};

export default strPrice;
