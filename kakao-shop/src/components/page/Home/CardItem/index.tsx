import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Product } from '@store/Home/reducers';

import { Photo } from '@components/atom';
import { comma } from '@utils/comma';

const CardItem = ({ productName, image, price }: Product) => {
  return (
    <S.Root>
      <Photo
        pictureClassName={S.PhotoStyle}
        imageClassName={S.ImgStyle}
        src={`${process.env.REACT_APP_PUBLIC_URL}${image}`}
        alt={'이미지'}
      />
      <S.Info>
        <S.Delivery>무료배송</S.Delivery>
        <S.ProductName>{productName}</S.ProductName>
        <S.Price>
          <span>톡딜가</span>
          <span>{comma(price)}원</span>
        </S.Price>
      </S.Info>
    </S.Root>
  );
};

export default CardItem;

const S = {
  Root: styled.div`
    display: inline-block;
    width: 284px;
    padding: 0 20px 50px 0;
    vertical-align: top;
  `,

  PhotoStyle: css`
    display: block;
    overflow: hidden;

    position: relative;

    height: 0;

    padding-bottom: 56.25%; // 16/9 비율
    border-radius: 8px;
  `,

  ImgStyle: css`
    transition: transform 450ms;

    &:hover {
      transform: scale(1.08);
    }
  `,

  Info: styled.div`
    padding-top: 12px;
    padding-bottom: 9px;
  `,

  Delivery: styled.span`
    display: inline-block;

    margin-right: 4px;
    padding: 0 5px;

    background-color: #f2f6f8;
    border-radius: 1px;

    font-size: 11px;
    line-height: 22px;
    color: rgba(24, 32, 55, 0.7);
    letter-spacing: -0.05em;
    vertical-align: top;
  `,

  ProductName: styled.div`
    padding-top: 9px;

    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.02em;
  `,

  Price: styled.div`
    margin-top: 9px;

    line-height: 21px;

    & > span:nth-of-type(1) {
      font-weight: 700;
      color: #4684e9;
      line-height: 21px;
      font-size: 18px;
    }

    & > span:nth-of-type(2) {
      margin-left: 4px;

      font-weight: 700;
      color: #111;
      line-height: 21px;
      font-size: 22px;
      vertical-align: top;
    }
  `,
};
