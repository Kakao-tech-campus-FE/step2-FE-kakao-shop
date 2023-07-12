import React from 'react'
import styled from 'styled-components';   

const Frame = styled.div`
  position: relative;
  width: 500px;
	background-color: red;
  overflow: hidden;
`;

const CarouselContainer = (props) => {
  return (
      <Frame>
        {props.children}
      </Frame>
  )
}

export default CarouselContainer