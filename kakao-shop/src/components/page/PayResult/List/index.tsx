import { OrderProduct } from '@apis/Order';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Item from '@components/page/PayResult/Item';

type Props = {
  orderProducts: OrderProduct[];
};

const List = ({ orderProducts }: Props) => {
  return (
    <S.Root>
      {orderProducts.map(product => {
        return <Item key={product.productName} product={product} />;
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
