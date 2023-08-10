import instance from '.';

const order = () => {
  return instance.post('/orders/save');
};

const orderResult = (id: number) => {
  return instance.get(`/orders/${id}`);
};

export { order, orderResult };
