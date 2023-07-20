const comma = (num) => {
  // Error catching
  let n = num;
  if (num === undefined || num === null) {
    return 0;
  }
  if (typeof num === 'number' && Number.isNaN(num)) {
    return 0;
  }
  if (typeof num === 'string') {
    n = parseInt(num, 10);
  }

  return n.toString().replace(/\B(?=(\d[3])+(?!\d))/g, ',');
};

export default comma;
