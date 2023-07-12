import React from 'react'
import styled from 'styled-components';   

const Content = styled.div`
  display: flex;
  width: 1500px;
  transition: all, 0.5s;
`;

const CarouselContent = (props) => {
  return (
      <Content style={ {transform: `translateX(${-500 * (props.page - 1)}px)`} }>
        {props.children}
      </Content>
  )
}

export default CarouselContent