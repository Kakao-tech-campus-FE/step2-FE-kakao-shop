import { productDetailRequest } from '@store/Detail/reducers';
import { Option } from '@store/Home/reducers';
import { RootState } from '@store/index';
import { useEffect, useState, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useOptionForm = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.detail.product);
  const [options, setOptions] = useState<UserSelectOption[] | undefined>();
  const totals = options?.reduce(calculateTotal, {
    quantity: 0,
    price: 0,
  } as Totals);

  useEffect(() => {
    if (!productId) return;

    dispatch(productDetailRequest(productId));
  }, [productId, dispatch]);

  useEffect(() => {
    setOptions(getUserSelectOption(product?.options));
  }, [product]);

  const onSelectOption = (id: number) => {
    setOptions(updatedSelectedOptions(id));
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

  return {
    state: {
      product,
      options,
      totals,
    },
    handler: {
      onSelectOption,
      increaseQuantity,
      decreaseQuantity,
    },
  };
};

const UP1 = 1;
const DOWN1 = -1;

const getUserSelectOption = (options?: Option[]) => {
  if (!options) return;

  const userSelectOption = options?.map(option => {
    return {
      ...option,
      isSelected: false,
      quantity: 0,
    };
  });

  return userSelectOption;
};

const updatedSelectedOptions = (id: number) => (prevOptions?: UserSelectOption[]) => {
  return prevOptions?.map(option => {
    if (option.id === id) {
      return {
        ...option,
        isSelected: true,
        quantity: 1,
      };
    }
    return option;
  });
};

const calculateTotal = (totals: Totals, item: UserSelectOption) => {
  totals.quantity += item.quantity;
  totals.price += item.price * item.quantity;
  return totals;
};

const updateQuantityOptions = (id: number, options: UserSelectOption[], quantityChange: number) =>
  options?.map(option => {
    if (option.id === id) {
      return {
        ...option,
        quantity: option.quantity + quantityChange,
      };
    }
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
