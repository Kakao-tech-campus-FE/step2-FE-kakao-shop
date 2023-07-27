import { getProductDetailAPI } from '@apis/Detail';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import type { CartProduct } from 'types/product';

import OptionList from '@components/page/Order/OptionList';

type Props = {
  product: CartProduct;
};

const Item = ({ product }: Props) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    getProductDetailAPI(product.id.toString())
      .then(res => {
        setImage(res.data.response.image);
      })
      .catch(() => {
        alert('에러 발생');
      });
  }, []);

  return (
    <S.Root>
      <S.Tit>{product.productName}</S.Tit>
      <OptionList carts={product.carts} productName={product.productName} image={image} />
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
