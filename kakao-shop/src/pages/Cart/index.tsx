import styled from '@emotion/styled';

import Header from '@components/page/Cart/Header';
import ItemList from '@components/page/Cart/ItemList';
import Submit from '@components/page/Cart/Submit';
import TotalResult from '@components/page/Cart/TotalResult';

import { useCartForm } from '@hooks/page/Cart/useCartForm';

const Cart = () => {
  const {
    state: { carts: products, totalPrice },
    handler: { onIncreaseQuantity, onDecreaseQuantity },
  } = useCartForm();

  return (
    <S.Root>
      <S.Container>
        <Header />
        <ItemList products={products} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} />
        <TotalResult totalPrice={totalPrice} />
        <Submit />
      </S.Container>
    </S.Root>
  );
};

export default Cart;

const S = {
  Root: styled.div`
    background-color: #f2f3f5;
  `,
  Container: styled.main`
    width: 870px;
    min-height: calc(100vh - 204px);

    margin: 0 auto;

    &::after {
      content: '';

      display: block;
      box-sizing: border-box;

      height: 12px;

      background-color: #f2f3f5;
    }
  `,
};
