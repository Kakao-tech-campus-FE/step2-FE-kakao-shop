import { Product, cartsRequest } from '@store/Cart/reducers';
import { RootState } from '@store/index';
import { produce, current } from 'immer';
import { useEffect, useState, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useCartForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cart.cart);
  const [carts, setCarts] = useState(data);
  const totalPrice = carts.reduce((total, product) => {
    const productTotal = product.carts.reduce((subTotal, cart) => subTotal + cart.option.price * cart.quantity, 0);
    return total + productTotal;
  }, 0);

  useEffect(() => {
    dispatch(cartsRequest());
  }, [dispatch]);

  useEffect(() => {
    setCarts(data);
  }, [data]);

  const onIncreaseQuantity =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (!carts) return;
      setCarts(updateQuantityCarts(id, carts, UP1));
    };

  const onDecreaseQuantity =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (!carts) return;
      setCarts(updateQuantityCarts(id, carts, DOWN1));
    };

  return {
    state: {
      carts,
      totalPrice,
    },
    handler: {
      onIncreaseQuantity,
      onDecreaseQuantity,
    },
  };
};

const UP1 = 1;
const DOWN1 = -1;

const isValidQuantityChange = (quantity: number, quantityChange: number): boolean =>
  !(quantity === 1 && quantityChange === DOWN1);

const updateQuantityCarts = (id: number, carts: Product[], quantityChange: number) => {
  return produce(carts, draft => {
    const optionItem = draft.flatMap(product => product.carts).find(option => option.id === id);

    if (!optionItem) return;
    if (!isValidQuantityChange(optionItem.quantity, quantityChange)) return;
    optionItem.quantity = optionItem.quantity + quantityChange;
  });
};
