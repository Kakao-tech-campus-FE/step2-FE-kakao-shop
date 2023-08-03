import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/atom';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <S.Root>
      <S.Desc>장바구니에 담긴 상품이 없습니다.</S.Desc>
      <Button css={S.ButtonCSS} onClick={() => navigate('/')}>
        쇼핑 계속하기
      </Button>
    </S.Root>
  );
};

export default EmptyCart;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 304px);

    margin-bottom: 12px;
    padding: 0 20px;

    background-color: #fff;
  `,

  Desc: styled.div`
    margin-top: 8px;

    color: #555;
    font-weight: 400;
  `,

  ButtonCSS: css`
    width: 100px;
    height: 34px;

    margin-top: 12px;

    border-radius: 5px;
    background-color: #1e1e1e;

    color: #fff;
  `,
};
