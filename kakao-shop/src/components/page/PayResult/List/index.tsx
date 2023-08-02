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
        const totalSubquantities = product.items.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0);

        if (totalSubquantities === 0) return null;

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
