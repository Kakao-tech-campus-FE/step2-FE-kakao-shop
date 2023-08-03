import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '@components/page/PayResult/Header';
import Info from '@components/page/PayResult/Info';
import ListSection from '@components/page/PayResult/ListSection';
import Submit from '@components/page/PayResult/Submit';
import TotalResult from '@components/page/PayResult/TotalResult';

const PayResult = () => {
  const navigate = useNavigate();
  const orderProducts = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')!) : undefined;
  const pageAllow = localStorage.getItem('PayResultPageAllow') ? localStorage.getItem('PayResultPageAllow') : undefined;

  useEffect(() => {
    if (!pageAllow) {
      alert('접근 권한이 없습니다.');
      navigate('/');
    }

    return () => {
      localStorage.removeItem('PayResultPageAllow');
    };
  }, [pageAllow]);

  if (!pageAllow) return null;

  return (
    <S.Root>
      <S.Container>
        <Header />
        <Info />
        <ListSection orderProducts={orderProducts?.products} />
        <TotalResult totalPrice={orderProducts?.totalPrice} />
        <Submit />
      </S.Container>
    </S.Root>
  );
};

export default PayResult;

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
