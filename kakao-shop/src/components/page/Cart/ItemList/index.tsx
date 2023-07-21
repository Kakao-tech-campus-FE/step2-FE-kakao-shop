import styled from '@emotion/styled';
import { Product } from '@store/Cart/reducers';
import { MouseEventHandler } from 'react';

import Item from '@components/page/Cart/Item';

type Props = {
  products: Product[];
  onIncreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDecreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDeleteCartItem: (id: number) => MouseEventHandler<HTMLButtonElement>;
};
const ItemList = ({ products, onIncreaseQuantity, onDecreaseQuantity, onDeleteCartItem }: Props) => {
  return (
    <S.Root>
      {products.map(product => {
        const isSumOfQuantityZero = product.carts.every(cart => cart.quantity === 0); // 현재 삭제 API 가 구현되어 있지않아 임시로 사용
        if (isSumOfQuantityZero) return null;
        return (
          <Item
            key={product.id}
            {...product}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDeleteCartItem={onDeleteCartItem}
          />
        );
      })}
    </S.Root>
  );
};

export default ItemList;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};
