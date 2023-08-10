import styled from '@emotion/styled';
import { Product } from 'types/product';

import CardItem from '@components/page/Home/CardItem';

import { IsMobile } from '@hooks/@common/useViewport';

type Props = {
  isMobile: boolean;
  products: Product[];
};

export const CardList = ({ isMobile, products }: Props) => {
  return (
    <S.Root isMobile={isMobile}>
      {products.map(product => (
        <CardItem key={product.id} {...product} />
      ))}
    </S.Root>
  );
};

CardList.Skeleton = function ({ isMobile }: IsMobile) {
  return (
    <S.Root isMobile={isMobile}>
      {Array.from({ length: 9 }).map((_, index) => (
        <CardItem.Skeleton key={index} />
      ))}
    </S.Root>
  );
};

const S = {
  Root: styled.div<{ isMobile: boolean }>`
    display: grid;
    gap: 20px 18px;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, minmax(20%, auto))' : 'repeat(3, minmax(20%, auto))'};
  `,
};
