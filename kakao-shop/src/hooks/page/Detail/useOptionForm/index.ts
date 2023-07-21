import { productDetailRequest } from '@store/Detail/reducers';
import { Option } from '@store/Home/reducers';
import { RootState } from '@store/index';
import { useEffect, useState, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Toast } from '@components/atom';

import { useToggle } from '@hooks/@common';

export const useOptionForm = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const [isOpenList, setIsOpenList, onToggle] = useToggle(false);
  const product = useSelector((state: RootState) => state.detail.product);
  const [options, setOptions] = useState<UserSelectOption[] | undefined>();

  const totals = options?.reduce(calculateTotal, {
    quantity: 0,
    price: 0,
  } as Totals);

  const addCartPayload = Object.values(options ?? [])
    .filter(option => option.isSelected)
    .map(({ id, quantity }) => ({ optionId: id, quantity }));

  useEffect(() => {
    if (!productId) return;

    dispatch(productDetailRequest(productId));
  }, [productId, dispatch]);

  useEffect(() => {
    setOptions(getUserSelectOption(product?.options));
  }, [product]);

  const onSelectOption = (id: number) => {
    setOptions(updateSelectedOptions(id));
  };

  const onDeleteOption =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      setOptions(deleteSelectedOptions(id));
    };

  const onIncreaseQuantity =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (!options) return;
      setOptions(updateQuantityOptions(id, options, UP1));
    };

  const onDecreaseQuantity =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (!options) return;
      setOptions(updateQuantityOptions(id, options, DOWN1));
    };

  return {
    state: {
      product,
      options,
      totals,
      isOpenList,
    },
    handler: {
      onSelectOption,
      onDeleteOption,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onToggle,
    },
  };
};

const UP1 = 1;
const DOWN1 = -1;

const addSelectProperty = (option: Option): UserSelectOption => ({
  ...option,
  isSelected: false,
  quantity: 0,
});

const getUserSelectOption = (options?: Option[]) => {
  if (!options) return;

  return options?.map(addSelectProperty);
};

const updateOption = (
  id: number,
  option: UserSelectOption,
  isSelected: boolean,
  quantity: number,
): UserSelectOption => {
  if (option.id === id) {
    return {
      ...option,
      isSelected,
      quantity,
    };
  }
  return option;
};

const updateSelectedOptions = (id: number) => (prevOptions?: UserSelectOption[]) => {
  const SELECTED = true;
  return prevOptions?.map(option => updateOption(id, option, SELECTED, 1));
};

const deleteSelectedOptions = (id: number) => (prevOptions?: UserSelectOption[]) => {
  const DELETE = false;
  return prevOptions?.map(option => updateOption(id, option, DELETE, 0));
};

const calculateTotal = (totals: Totals, item: UserSelectOption) => {
  totals.quantity += item.quantity;
  totals.price += item.price * item.quantity;
  return totals;
};

const isValidQuantityChange = (quantity: number, quantityChange: number): boolean =>
  !(quantity === 1 && quantityChange === DOWN1);

const updateQuantity = (option: UserSelectOption, quantityChange: number): UserSelectOption => ({
  ...option,
  quantity: option.quantity + quantityChange,
});

const updateQuantityOptions = (id: number, options: UserSelectOption[], quantityChange: number) =>
  options?.map(option => {
    if (option.id === id && isValidQuantityChange(option.quantity, quantityChange))
      return updateQuantity(option, quantityChange);

    return option;
  });

export type UserSelectOption = {
  isSelected: boolean;
  quantity: number;
} & Option;

export type Totals = {
  quantity: number;
  price: number;
};
