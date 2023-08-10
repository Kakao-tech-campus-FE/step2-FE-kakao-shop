import { OrderProduct } from '@apis/Order';
import styled from '@emotion/styled';

import OptionList from '@components/page/PayResult/OptionList';

type Props = {
  product: OrderProduct;
};

const Item = ({ product }: Props) => {
  return (
    <S.Root>
      <S.Tit>{product.productName}</S.Tit>
      <OptionList productName={product.productName} items={product.items} />
    </S.Root>
  );
};

export default Item;

const S = {
  Root: styled.div`
    background-color: #fff;
  `,

  Tit: styled.strong`
    position: relative;

    display: block;

    padding: 16px;

    font-size: 16px;
    line-height: 21px;
    color: #333;
    letter-spacing: -0.03em;
    text-overflow: ellipsis;
  `,
};
