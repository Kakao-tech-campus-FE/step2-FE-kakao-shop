import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { Cart } from 'types/product';

import { Photo } from '@components/atom';

import { comma } from '@utils/comma';

type Props = {
  cart: Cart;
  productName: string;
  image: string;
};
const OptionItem = ({ cart, productName, image }: Props) => {
  return (
    <S.Root>
      <S.Container>
        <Photo imageClassName={S.ImageCSS} src={`${process.env.REACT_APP_PROD_SERVER}${image}`} alt={productName} />
        <S.Info>
          <S.Tit>{productName}</S.Tit>
          <S.OptionTit>{`[옵션] ${cart.option.optionName}, ${cart.quantity}개`}</S.OptionTit>
          <S.Price>
            <span>{comma(cart.price)}</span>
            <span>원</span>
          </S.Price>
        </S.Info>
      </S.Container>
    </S.Root>
  );
};

export default OptionItem;

const S = {
  Root: styled.li`
    position: relative;
    margin: 0 16px;
  `,

  Container: styled.div`
    display: flex;

    padding: 16px 0 20px;
  `,

  Tit: styled.strong`
    display: block;

    padding-top: 1px;

    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    color: #333;
    text-overflow: ellipsis;
    word-break: break-all;
  `,

  OptionTit: styled.span`
    display: block;

    margin-bottom: 6px;
    padding-top: 2px;

    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    line-height: 16px;
    color: #555;
  `,

  Price: styled.span`
    font-size: 16px;
    line-height: 15px;
    color: #000;

    & > span:nth-of-type(1) {
      margin-right: 1px;

      font-weight: 700;
      font-size: 18px;
    }
  `,

  ImageCSS: css`
    width: 60px;
    height: 60px;

    border-radius: 4px;
  `,

  Info: styled.div`
    margin-left: 10px;
  `,
};
