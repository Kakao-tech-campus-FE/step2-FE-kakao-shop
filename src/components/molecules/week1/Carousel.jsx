import React, { useState, useRef } from 'react'
import styled from 'styled-components'   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

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

const PageIcon = styled.div`
  margin: auto;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0.5;
`

const Carousel = () => {
  const [page, setPage] = useState(1)
  const timeslide = useRef(true)

  const timer = setTimeout(() => {
    if (timeslide.current === true && page < banners.length) {
      setPage(page + 1)
    }
  }, 3000);
  

  const prev = () => {
    timeslide.current = false
    if (page > 1) {
      setPage(page - 1)
    } 
  }

  const next = () => {
    timeslide.current = false
    if (page < banners.length) {
      setPage(page + 1)
    } 
  }

  const jump = (num) => {
    timeslide.current = false
    setPage(num)
  }
  
  return (
    <>
      <Frame>

        <Content style={ {transform: `translateX(${-500 * (page - 1)}px)`} }>
          {banners.map((item, i) => (
              <img src={item} style={ {width:"500px"} } />
          ))}
        </Content>

        <PageBox>
          {banners.map((item, i) => (
            <PageIcon onClick={() => jump(i + 1)} 
              style={i + 1 === page ? {opacity:"1"} : null}>
            </PageIcon> )
          )}
        </PageBox>

        {page > 1 
        ? <Prev onClick={prev}>
            <FontAwesomeIcon icon={faAngleLeft} style={ {color:'white'} }/>
          </Prev> 
        : null}

        {page < banners.length
        ? <Next onClick={next}> 
            <FontAwesomeIcon icon={faAngleRight} style={ {color:'white'} }/> 
          </Next> 
        : null}

      </Frame>
    </>
  )
}

export default Carousel
