import { RootState } from '@store/index';
import { useState, useEffect } from 'react';
import type { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import type { Totals, UserSelectOption, Option } from 'types/product';

import { useToggle } from '@hooks/@common';

const UP1 = 1;
const DOWN1 = -1;

export const useProductOption = () => {
  const product = useSelector((state: RootState) => state.detail.product);

  const [isOpenList, setIsOpenList, onToggle] = useToggle(false);
  const [options, setOptions] = useState<UserSelectOption[] | undefined>();

  const totals = options?.reduce(calculateTotal, {
    quantity: 0,
    price: 0,
  } as Totals);

  const getProductDetailRequest = Object.values(options ?? [])
    .filter(option => option.isSelected)
    .map(({ id, quantity }) => ({ optionId: id, quantity }));

  useEffect(() => {
    setOptions(getUserSelectOption(product?.options));
  }, [product]);

  const selectOption = (id: number) => {
    setOptions(updateSelectedOptions(id));
  };

  const deleteOption =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      setOptions(deleteSelectedOptions(id));
    };

  const increaseQuantity =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (!options) return;
      setOptions(updateQuantityOptions(id, options, UP1));
    };

  const decreaseQuantity =
    (id: number): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (!options) return;
      setOptions(updateQuantityOptions(id, options, DOWN1));
    };

  const initializeOptionsAfterRequest = () => {
    setIsOpenList(false);
    setOptions(getUserSelectOption(product?.options));
  };

  return {
    state: {
      options,
      getProductDetailRequest,
      totals,
      isOpenList,
    },
    handler: {
      initializeOptionsAfterRequest,
      selectOption,
      deleteOption,
      increaseQuantity,
      decreaseQuantity,
      onToggle,
    },
  };
};

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
