import React, { useState } from 'react'
import styled from 'styled-components'   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

const banners = [banner1, banner2, banner3]

const Frame = styled.div`
  position: relative;
  width: 500px;
	background-color: red;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  width: 1500px;
  transition: all, 0.5s;
`;

const Prev = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 3;
`
const Next = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  z-index: 3;
`

const PageBox = styled.div`
  position: absolute; 
  width: 3rem;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 3;
`;

const Page = styled.div`
  margin: auto;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0.5;
`

const Carousel = () => {
  // const [flow, setFlow] = useState(false)
  const [count, setCount] = useState(1)

  const prev = () => {
    if (count > 1) {
      setCount(count - 1)
    } 
  }

  const next = () => {
    if (count < banners.length) {
      setCount(count + 1)
    } 
  }

  const jump = (num) => {
    return (() => setCount(num))
  }
  
  return (
    <>
      <Frame>

        <PageBox>
          {banners.map((e, index) => {
            var page = index + 1;
            return (
              <Page key={e} onClick={jump(page)} 
                style={count === page ? {opacity:"1"} : null}>
              </Page>
            );
          })}
        </PageBox>

        <Content style={ {transform: `translateX(${-500 * (count - 1)}px)`} }>
          {banners.map((element, i) => {
              return <img src={element} style={ {width:"500px"} } />;
          })}
        </Content>

        {count > 1 
        ? <Prev onClick={prev}>
            <FontAwesomeIcon icon={faAngleLeft} style={ {color:'white'} }/>
          </Prev> 
        : null}

        {count < banners.length
        ? <Next onClick={next}> 
            <FontAwesomeIcon icon={faAngleRight} style={ {color:'white'} }/> 
          </Next> 
        : null}

      </Frame>
    </>
  )
}

export default Carousel
