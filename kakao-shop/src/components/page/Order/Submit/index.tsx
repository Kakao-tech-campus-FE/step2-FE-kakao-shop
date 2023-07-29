import { css } from '@emotion/react';
import { paymentRequestAction } from '@store/Order/reducers';
import { useDispatch } from 'react-redux';
import { CartProduct } from 'types/product';

import { Button } from '@components/atom';

type Props = {
  isAllChecked: boolean;
  totalPrice: number;
  cartProducts: CartProduct[];
};

const Submit = ({ isAllChecked, totalPrice, cartProducts }: Props) => {
  const dispatch = useDispatch();
  const totalLength = cartProducts.reduce((sum, product) => sum + product.carts.length, 0);
  const totalProductNames = `${cartProducts[0]?.productName} '외 ${totalLength - 1}개`;

  const onSubmit = () => {
    if (!isAllChecked) {
      alert('약관에 동의해주세요.');
      return;
    }

    dispatch(paymentRequestAction({ itemName: totalProductNames, quantity: totalLength, totalAmount: totalPrice }));
  };

  return (
    <Button data-testid={'order-submit'} onClick={onSubmit} css={S.ButtonCSS}>
      결제하기
    </Button>
  );
};

export default Submit;

const S = {
  ButtonCSS: css`
    font-weight: 700;
    font-size: 18px;
    line-height: 54px;
    color: #333;
    letter-spacing: -0.025em;
    background-color: #feeb00;
  `,
};
