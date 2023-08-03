const comma = (num: number) => {
  if (num === undefined || num === null) {
    return 0;
  }
  if (typeof num === 'number' && Number.isNaN(num)) {
    return 0;
  }
  if (typeof num === 'string') {
    // eslint-disable-next-line no-param-reassign
    num = Number.parseInt(num, 10);
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const staticUrl = (url: string) => {
  return (process.env.REACT_APP_PATH || '') + url;
};

const fullUrl = (url: string) => {
  return staticUrl('/public') + url;
};

export { comma, fullUrl, staticUrl };
