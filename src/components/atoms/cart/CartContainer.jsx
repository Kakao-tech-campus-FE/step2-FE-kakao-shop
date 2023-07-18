import React from 'react'
import styled from 'styled-components';  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 10px;

`
const CartContainer = (props) => {
    return (
      <Container>
        {props.children}
      </Container>
    );
};

export default CartContainer