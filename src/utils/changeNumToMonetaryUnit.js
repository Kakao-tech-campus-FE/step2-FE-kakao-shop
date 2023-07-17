const changeNumToMonetaryUnit = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default changeNumToMonetaryUnit;
