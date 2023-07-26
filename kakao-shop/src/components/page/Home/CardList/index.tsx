import styled from '@emotion/styled';
import { Product } from 'types/product';

import CardItem from '@components/page/Home/CardItem';

type Props = {
  products: Product[];
};

export const CardList = ({ products }: Props) => {
  return (
    <S.Root>
      {products.map(product => (
        <CardItem key={product.id} {...product} />
      ))}
    </S.Root>
  );
};

CardList.Skeleton = function () {
  return (
    <S.Root>
      {Array.from({ length: 9 }).map((_, index) => (
        <CardItem.Skeleton key={index} />
      ))}
    </S.Root>
  );
};

const S = {
  Root: styled.div`
    display: grid;
    gap: 20px 18px;
    grid-template-columns: repeat(3, minmax(20%, auto));
  `,
};
