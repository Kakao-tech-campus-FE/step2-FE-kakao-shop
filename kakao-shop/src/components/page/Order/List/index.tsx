import styled from '@emotion/styled';
import type { CartProduct } from 'types/product';

import Item from '@components/page/Order/Item';

type Props = {
  cartProducts: CartProduct[];
};

const List = ({ cartProducts }: Props) => {
  return (
    <S.Root>
      {cartProducts.map(item => {
        const isSumOfQuantityZero = item.carts.every(cart => cart.quantity === 0); // 현재 삭제 API 가 구현되어 있지않아 임시로 사용
        if (isSumOfQuantityZero) return null;
        return <Item key={item.id} product={item} />;
      })}
    </S.Root>
  );
};

export default List;

const S = {
  Root: styled.div`
    & > div:not(:first-child) {
      margin-top: 12px; /* Adjust the margin value as per your requirement */
    }
  `,
};
