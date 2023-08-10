import styled from '@emotion/styled';
import type { Cart } from 'types/product';

import OptionItem from '@components/page/Order/OptionItem';

type Props = {
  carts: Cart[];
  productName: string;
  image: string;
};

const OptionList = ({ carts, productName, image }: Props) => {
  return (
    <S.Container>
      {carts.map(cart => {
        if (cart.quantity === 0) return null; // 현재 삭제 API 가 구현되어 있지않아 임시로 사용
        return <OptionItem key={cart.id} cart={cart} productName={productName} image={image} />;
      })}
    </S.Container>
  );
};

export default OptionList;

const S = {
  Container: styled.ul`
    border-top: 1px solid rgba(237, 237, 237, 0.5);
  `,
};
