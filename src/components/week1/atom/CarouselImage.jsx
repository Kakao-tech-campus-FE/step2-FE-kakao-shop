import React from 'react'
import styled from 'styled-components';   

const Img = styled.img`
  width: 500px;
`;

const CarouselImage = (props) => {
  return (
      <Img src={props.src} />
  )
}

export default CarouselImage