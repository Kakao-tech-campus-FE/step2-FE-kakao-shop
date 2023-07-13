import React from 'react';
import CardContainer from '../atoms/productsList/CardContainer'
import Image from '../atoms/Image'
import ItemTitle from '../atoms/productsList/ItemTitle'
import ItemPrice from '../atoms/productsList/ItemPrice'
import StyledLink from '../atoms/StyledLink';
import ImageBox from '../atoms/productsList/ImageBox';

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