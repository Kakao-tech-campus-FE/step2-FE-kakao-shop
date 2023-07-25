import shoppingCart from '@assets/shoppingCart.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';

import { Button, Photo } from '@components/atom';

type Props = {
  onAddCart: MouseEventHandler<HTMLButtonElement>;
  onNavigateCart: MouseEventHandler<HTMLButtonElement>;
};

const PurchaseButtons = ({ onAddCart, onNavigateCart }: Props) => {
  return (
    <S.Root>
      <Button css={S.BasketButtonCSS} onClick={onAddCart}>
        <Photo imageClassName={S.ShoppingCartCSS} src={shoppingCart} alt={'장바구니'} />
      </Button>
      <Button css={S.PurchaseButtonCSS} onClick={onNavigateCart}>
        톡딜가로 구매하기
      </Button>
    </S.Root>
  );
};

export default PurchaseButtons;

const S = {
  Root: styled.div`
    display: flex;
  `,

  ShoppingCartCSS: css`
    width: 28px;
    height: 28px;

    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(228deg) brightness(102%) contrast(102%);
  `,

  BasketButtonCSS: css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    margin-right: 4px;
    border-radius: 5px;
    background-color: #1e1e1e;
  `,

  PurchaseButtonCSS: css`
    flex: 1;

    background-color: #ffeb00;
    border-radius: 5px;

    font-size: 18px;
    color: #000;
  `,
};
