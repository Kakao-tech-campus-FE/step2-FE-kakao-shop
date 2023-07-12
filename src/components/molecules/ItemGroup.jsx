import React from 'react';
import ItemContainer from '../atoms/productsList/ItemContainer'
import ItemImg from '../atoms/productsList/ItemImg'
import ItemTitle from '../atoms/productsList/ItemTitle'
import ItemPrice from '../atoms/productsList/ItemPrice'
import StyledLink from '../atoms/StyledLink';

const ItemGroup = ( props ) => {

  return (
    <ItemContainer>
      <StyledLink to={props.link}>
        <ItemImg src={props.image} />
        <ItemTitle>{props.productName}</ItemTitle>
        <ItemPrice>{props.price}</ItemPrice>
      </StyledLink>
    </ItemContainer>
  )
}

export default ItemGroup