import React from 'react';
import CardContainer from '../atoms/productsList/CardContainer'
import Image from '../atoms/Image'
import ItemTitle from '../atoms/productsList/ItemTitle'
import ItemPrice from '../atoms/productsList/ItemPrice'
import StyledLink from '../atoms/StyledLink';
import ImageBox from '../atoms/productsList/ImageBox';

/**
 * 상품 리스트에서 상품 정보 카드
 * @param {*} props 
 * @param {string} props.link - 상품 상세페이지 링크
 * @param {*} props.image - 이미지 링크
 * @param {*} props.productName - 상품 이름
 * @param {*} props.price - 상품 가격
 * @returns 
 */
const ProductCard = ( props ) => {

  return (
    <CardContainer>
      <StyledLink to={props.link}>
        <ImageBox>
          <Image image={props.image} alt={props.productName}/>
        </ImageBox>
        <ItemTitle>{props.productName}</ItemTitle>
        <ItemPrice>{props.price}</ItemPrice>
      </StyledLink>
    </CardContainer>
  )
}

export default ProductCard