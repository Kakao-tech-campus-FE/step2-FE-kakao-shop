import React from 'react'
import MainContainer from '../atoms/MainContainer';
import Cart from 'components/organisms/Cart';

const CartTemplate = () => {
  return (
    <MainContainer direction={"column"}>
      <Cart />
    </MainContainer>
  )
}

export default CartTemplate