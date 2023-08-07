import React from 'react';
import { styled } from 'styled-components'

import Image from 'components/atoms/Image'
import StyledLink from 'components/atoms/StyledLink';
import Skeleton from 'components/atoms/Skeleton';
import strPrice from 'utils/price';

/**
 * 상품 리스트에서 상품 정보 카드
 * @param {*} props 
 * @param {string} props.link - 상품 상세페이지 링크
 * @param {*} props.image - 이미지 링크
 * @param {*} props.productName - 상품 이름
 * @param {*} props.price - 상품 가격
 * @returns 
 */
export const ProductCard = ( { link, image, productName, price } ) => {

  return (
    <CardContainer>
      <StyledLink to={link}>
        <ImageBox>
          <Image image={image} alt={productName}/>
        </ImageBox>
        <ItemTitle>{productName}</ItemTitle>
        <ItemPrice>{strPrice(price)}</ItemPrice>
      </StyledLink>
    </CardContainer>
  )
}

export const ProductCardSkeleton = ( ) => {

  return (
    <CardContainer>
        <ImageBox><Skeleton /></ImageBox>
        <ItemTitle><Skeleton height="50%"/></ItemTitle>
        <ItemPrice><Skeleton></Skeleton></ItemPrice>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 320px;
  padding: 10px 0 40PX 0;
  cursor: pointer;
`

const ImageBox = styled.div`
  width: 100%;
  text-decoration: none;
  aspect-ratio: 1/1;
`

const ItemTitle = styled.div`
    width: 100%;
    text-decoration: none;
    height: 5.2rem;
    margin: 5px 0;
`

const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  height: 1.4rem;
`