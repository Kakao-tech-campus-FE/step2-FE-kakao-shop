import styled from '@emotion/styled';
import { Product } from '@store/Cart/reducers';
import { MouseEventHandler } from 'react';

import Item from '@components/page/Cart/Item';

type Props = {
  products: Product[];
  onIncreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onDecreaseQuantity: (id: number) => MouseEventHandler<HTMLButtonElement>;
};
const ItemList = ({ products, onIncreaseQuantity, onDecreaseQuantity }: Props) => {
  return (
    <S.Root>
      {products.map(product => (
        <Item
          key={product.id}
          {...product}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
        />
      ))}
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
