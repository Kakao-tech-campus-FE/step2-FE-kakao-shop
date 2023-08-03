import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import type { Product } from 'types/product';

import { Photo } from '@components/atom';
import Skeleton from '@components/atom/Skeleton';

import useViewport from '@hooks/@common/useViewport';

import { comma } from '@utils/comma';

const CardItem = ({ id, productName, image, price }: Product) => {
  const { isMobile } = useViewport();

  return (
    <S.Root to={`/detail/${id}`} isMobile={isMobile}>
      <Photo
        pictureClassName={S.PhotoStyle}
        imageClassName={S.ImgStyle}
        src={`${process.env.REACT_APP_IMAGE_CDN}${image.replace('/images', '')}?w=522&h=294&f=webp&q=80`}
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

CardItem.Skeleton = function () {
  return (
    <S.SkeletonRoot>
      <Skeleton.Box width={285} height={160} />
      <Skeleton.Box width={45} height={22} />
      <Skeleton.Paragraph widthPercent={90} fontSize={14} lineHeight={17} />
      <Skeleton.Paragraph widthPercent={70} fontSize={24} lineHeight={27} />
    </S.SkeletonRoot>
  );
};

export default CardItem;

const S = {
  Root: styled(Link)<{ isMobile: boolean }>`
    ${({ isMobile }) => css`
      display: inline-block;
      width: ${isMobile ? '100%' : '284px'};
      padding: ${isMobile ? '0' : '0 20px 50px 0'};
      vertical-align: top;
    `}
  `,

  PhotoStyle: css`
    display: block;
    overflow: hidden;

    position: relative;

    height: 0;

    padding-bottom: 56.25%; // 16/9 비율
    border-radius: 8px;

    cursor: pointer;
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

    cursor: pointer;
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

  // Skeleton
  SkeletonRoot: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};
