import styled from '@emotion/styled';
import { getCartsRequestAction } from '@store/Cart/reducers';
import { RootState } from '@store/index';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Agree from '@components/page/Order/Agree';
import Header from '@components/page/Order/Header';
import ListSection from '@components/page/Order/ListSection';
import Submit from '@components/page/Order/Submit';
import TotalResult from '@components/page/Order/TotalResult';

export type CheckboxData = { name: string; 'data-testid': string };

const CHECKBOX_DATA = [
  { name: '카카오페이 결제조건 및 개인정보 제3자 제공 동의', 'data-testid': 'order-checkbox1' },
  { name: '개인정보 제3자 제공 동의', 'data-testid': 'order-checkbox2' },
];

const Order = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const [checkedListById, setCheckedListById] = useState<string[]>([]);
  const isAllChecked = checkedListById.length === CHECKBOX_DATA.length;

  useEffect(() => {
    dispatch(getCartsRequestAction());
  }, [dispatch]);

  return (
    <S.Root>
      <S.Container>
        <Header />
        <ListSection cartProducts={cartProducts} />
        <Agree
          isAllChecked={isAllChecked}
          checkedListById={checkedListById}
          setCheckedListById={setCheckedListById}
          CHECKBOX_DATA={CHECKBOX_DATA}
        />
        <TotalResult totalPrice={totalPrice} />
        <Submit isAllChecked={isAllChecked} totalPrice={totalPrice} cartProducts={cartProducts} />
      </S.Container>
    </S.Root>
  );
};

export default Order;

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
