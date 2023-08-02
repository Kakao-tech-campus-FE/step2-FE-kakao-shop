import { getCartsRequestAction, updateCartsRequestAction } from '@store/Cart/reducers';
import { updateIsEnterNextPage } from '@store/Order/reducers';
import { RootState } from '@store/index';
import { produce } from 'immer';
import { useEffect, useState, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { CartProduct } from 'types/product';

export const useCartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cart.cart);
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);
  const error = useSelector((state: RootState) => state.cart.error);
  const [carts, setCarts] = useState(data);

  const totalPrice = carts.reduce((total, product) => {
    const productTotal = product.carts.reduce((subTotal, cart) => subTotal + cart.option.price * cart.quantity, 0);
    return total + productTotal;
  }, 0);

  const submitData = cartsToSubmitData(carts);

  useEffect(() => {
    dispatch(getCartsRequestAction());
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

  const onDeleteCartItem =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    e => {
      e.preventDefault();

      const update = deleteQuantityCarts(id, carts);
      dispatch(updateCartsRequestAction(cartsToSubmitData(update)));
    };

  const onSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(updateCartsRequestAction(submitData));
    dispatch(updateIsEnterNextPage(true));
    navigate('/order');
  };

  return {
    state: {
      isLoading,
      error,
      carts,
      totalPrice,
    },
    handler: {
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteCartItem,
      onSubmit,
    },
  };
};

const UP1 = 1;
const DOWN1 = -1;

const isValidQuantityChange = (quantity: number, quantityChange: number): boolean =>
  !(quantity === 1 && quantityChange === DOWN1);

const updateQuantityCarts = (id: number, carts: CartProduct[], quantityChange: number) => {
  return produce(carts, draft => {
    const optionItem = draft.flatMap(product => product.carts).find(option => option.id === id);

    if (!optionItem) return;
    if (!isValidQuantityChange(optionItem.quantity, quantityChange)) return;
    optionItem.quantity = optionItem.quantity + quantityChange;
  });
};

const deleteQuantityCarts = (id: number, carts: CartProduct[]) => {
  return produce(carts, draft => {
    const DELETED = 0;
    const optionItem = draft.flatMap(product => product.carts).find(option => option.id === id);

    if (!optionItem) return;
    optionItem.quantity = DELETED;
  });
};

const cartsToSubmitData = (carts: CartProduct[]) =>
  carts.flatMap(product => product.carts.map(cart => ({ cartId: cart.id, quantity: cart.quantity })));
