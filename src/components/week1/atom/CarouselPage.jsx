import React from 'react'
import styled from 'styled-components';   

const PageBox = styled.div`
  position: absolute; 
  width: 3rem;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 3;
`;

const PageIcon = styled.div`
  margin: auto;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0.5;
`

const CarouselPage = (props) => {
  return (
    <PageBox>
        {props.list.map((item, i) => (
            <PageIcon 
                onClick={() => props.func(props.page, 'jump', i + 1)} 
                style={i + 1 === props.page ? {opacity:1} : null} />
            )
        )}
    </PageBox>
  )
}

export default CarouselPage