import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import type { Cart } from 'types/product';

import SelectOptionItemList from '@components/page/Cart/SelectOption/List';
import SelectOptionResult from '@components/page/Cart/SelectOption/Result';

type Props = {
  productName: string;
  carts: Cart[];
  onIncreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDecreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDeleteCartItem: (id: number) => MouseEventHandler<HTMLButtonElement>;
};

const Item = ({ productName, carts, onIncreaseQuantity, onDecreaseQuantity, onDeleteCartItem }: Props) => {
  const totalPrice = carts.reduce((total, cart) => total + cart.quantity * cart.option.price, 0);

  return (
    <S.Root>
      <S.Tit>{productName}</S.Tit>
      <SelectOptionItemList
        carts={carts}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
        onDeleteCartItem={onDeleteCartItem}
      />
      <SelectOptionResult totalPrice={totalPrice} />
    </S.Root>
  );
};

export default Item;

const S = {
  Root: styled.div`
    padding: 16px 20px;

    border-top: 1px solid rgba(237, 237, 237, 0.5);
    border-bottom: 1px solid #ebebeb;
    background-color: #fff;
  `,

  Tit: styled.div`
    display: flex;
    align-items: center;

    height: 60px;

    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #333;
  `,
};
