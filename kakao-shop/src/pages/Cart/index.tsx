import styled from '@emotion/styled';
import withRouteGuard from '@hocs/withRouteGuard/withRouteGuard';

import { CustomSuspense } from '@components/atom';
import PageLoader from '@components/molecules/PageLoader';
import Header from '@components/page/Cart/Header';
import ItemList from '@components/page/Cart/ItemList';
import Submit from '@components/page/Cart/Submit';
import TotalResult from '@components/page/Cart/TotalResult';

import { useCartPage } from '@hooks/page/Cart/useCartPage';

const Cart = withRouteGuard('/login', () => {
  const {
    state: { isLoading, error, carts: products, totalPrice },
    handler: { onIncreaseQuantity, onDecreaseQuantity, onDeleteCartItem, onSubmit },
  } = useCartPage();

  return (
    <CustomSuspense isLoading={isLoading} error={error} fallback={<PageLoader />}>
      <S.Root>
        <S.Container>
          <Header />
          <ItemList
            products={products}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDeleteCartItem={onDeleteCartItem}
          />
          <TotalResult totalPrice={totalPrice} />
          <Submit onSubmit={onSubmit} />
        </S.Container>
      </S.Root>
    </CustomSuspense>
  );
});

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

    @media (max-width: 768px) {
      width: 100vw;
    }
  `,
};
