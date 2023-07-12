import React from 'react'
import styled from 'styled-components';  

const StyledImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  margin: 0 10px;
  background-image: url("${props => props.image}");
  background-size: contain;
  background-repeat: no-repeat;
`;

const ItemImg = (props) => {
    return (
        <StyledImg></StyledImg>
    );
};

export default ItemImg