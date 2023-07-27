export const comma = (num) => {
  if (!num || isNaN(num)) {
    return 0;
  }
  const parsedNum = Number(num);
  if (isNaN(parsedNum)) {
    return 0;
  }

  return parsedNum.toLocaleString();
};
