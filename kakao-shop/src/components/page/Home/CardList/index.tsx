import styled from '@emotion/styled';
import { Product } from '@store/Home/reducers';

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

const S = {
  Root: styled.div`
    display: grid;
    gap: 20px 18px;
    grid-template-columns: repeat(3, minmax(20%, auto));
  `,
};
