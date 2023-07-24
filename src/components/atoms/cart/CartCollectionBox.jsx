import React from 'react'
import styled from 'styled-components';  

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
`
const CartCollectionBox = (props) => {
    return (
      <Box style={props.style}>
        {props.children}
      </Box>
    );
};

export default CartCollectionBox