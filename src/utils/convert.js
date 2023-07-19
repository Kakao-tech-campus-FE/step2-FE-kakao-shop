const comma = (num) => {
  if (num === undefined || num === null) {
    return 0;
  }

  if (typeof num === "number" && Number.isNaN(num)) {
    return 0;
  }

  if (typeof num === "string") {
    // eslint-disable-next-line no-param-reassign
    num = parseInt(num, 10);
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default comma;
