import { css } from '@emotion/react';
import styled from '@emotion/styled';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const NavigateCart = () => {
  return (
    <S.Root>
      <span>장바구니에 담겼습니다.</span>
      <a href={`${staticServerUrl}/cart`}>바로가기</a>
    </S.Root>
  );
};

export default NavigateCart;

const S = {
  Root: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      font-size: 14px;
      color: #feeb00;
    }
  `,
};
