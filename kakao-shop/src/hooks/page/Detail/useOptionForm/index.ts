import { addCartItemAction, getProductDetailRequestAction } from '@store/Detail/reducers';
import { RootState } from '@store/index';
import { useEffect, useState, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Option, Totals } from 'types/product';
import type { UserSelectOption } from 'types/product';

import { Toast } from '@components/atom';

import { useToggle } from '@hooks/@common';

import { getCookie } from '@utils/cookie';

export const useOptionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.detail.product);
  const isLoading = useSelector((state: RootState) => state.detail.isLoading);
  const error = useSelector((state: RootState) => state.detail.error);

  const { id: productId } = useParams();
  const [isOpenList, setIsOpenList, onToggle] = useToggle(false);
  const [options, setOptions] = useState<UserSelectOption[] | undefined>();
  const [isModal, setIsModal] = useToggle(false);

  const totals = options?.reduce(calculateTotal, {
    quantity: 0,
    price: 0,
  } as Totals);

  const getProductDetailRequest = Object.values(options ?? [])
    .filter(option => option.isSelected)
    .map(({ id, quantity }) => ({ optionId: id, quantity }));

  useEffect(() => {
    if (!productId) return;

    dispatch(getProductDetailRequestAction(productId));
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

  const onAddCart: MouseEventHandler<HTMLButtonElement> = () => {
    if (!getCookie('accessToken')) return setIsModal(true);

    if (getProductDetailRequest.length === 0) {
      Toast.show('옵션을 먼저 선택해주세요');
      return;
    }

    dispatch(addCartItemAction(getProductDetailRequest));
    setIsOpenList(false);
    setOptions(getUserSelectOption(product?.options));
    Toast.show('장바구니에 담겼습니다');
  };

  const onClose = () => {
    setIsModal(false);
  };

  const onConfirm = () => {
    navigate('/login');
  };

  return {
    state: {
      isLoading,
      error,
      product,
      options,
      totals,
      isOpenList,
      isModal,
    },
    handler: {
      onSelectOption,
      onDeleteOption,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onToggle,
      onAddCart,
      onClose,
      onConfirm,
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
