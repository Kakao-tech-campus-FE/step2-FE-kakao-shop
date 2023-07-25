import { addCartItemAction, getProductDetailRequestAction } from '@store/Detail/reducers';
import { RootState } from '@store/index';
import { useEffect, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Toast } from '@components/atom';

import { useToggle } from '@hooks/@common';
import { useProductOption } from '@hooks/page/ProductDetail/useProductOption';

export const useProductDetail = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state: RootState) => state.signIn.isLogin);
  const product = useSelector((state: RootState) => state.detail.product);
  const isLoading = useSelector((state: RootState) => state.detail.isLoading);
  const error = useSelector((state: RootState) => state.detail.error);

  const [isModal, setIsModal] = useToggle(false);
  const {
    state: { options, getProductDetailRequest, totals, isOpenList },
    handler: {
      initializeOptionsAfterRequest,
      selectOption,
      deleteOption: onDeleteOption,
      increaseQuantity: onIncreaseQuantity,
      decreaseQuantity: onDecreaseQuantity,
      onToggle,
    },
  } = useProductOption();

  useEffect(() => {
    if (!productId) return;

    dispatch(getProductDetailRequestAction(productId));
  }, [productId, dispatch]);

  const onSelectOption = (id: number) => {
    if (!isLogin) return setIsModal(true);

    selectOption(id);
  };

  const onAddCart: MouseEventHandler<HTMLButtonElement> = () => {
    if (!isLogin) return setIsModal(true);

    if (getProductDetailRequest.length === 0) {
      Toast.show('옵션을 먼저 선택해주세요');
      return;
    }

    dispatch(addCartItemAction(getProductDetailRequest));
    initializeOptionsAfterRequest();
    Toast.show('장바구니에 담겼습니다');
  };

  const onNavigateCart = () => {
    if (!isLogin) return setIsModal(true);

    if (getProductDetailRequest.length === 0) {
      Toast.show('옵션을 먼저 선택해주세요');
      return;
    }

    dispatch(addCartItemAction(getProductDetailRequest));
    navigate('/cart');
  };

  const onModalClose = () => {
    setIsModal(false);
  };

  const onModalConfirm = () => {
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
      onModalClose,
      onModalConfirm,
      onNavigateCart,
    },
  };
};
