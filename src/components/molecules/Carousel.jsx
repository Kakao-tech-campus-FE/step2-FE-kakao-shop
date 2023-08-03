import React, { useState, useEffect } from 'react'
import styled from 'styled-components';   

import banner1 from 'assets/banner1.png'
import banner2 from 'assets/banner2.png'
import banner3 from 'assets/banner3.png'

import { NextButton, PrevButton } from 'components/atoms/PrevNextBtn';

const banners = [
  {
    image: banner1,
    link: '',
  }, 
  {
    image: banner2,
    link: '',
  }, 
  {
    image: banner3,
    link: '',
  },
]


const Carousel = () => {
  
  const [page, setPage] = useState(1)
  const [click, setClick] = useState(false)
  const [prevNowNext, setPNN] = useState([0, 1, 2])
  const [center, setCenter] = useState(1)
  const [isMoving, setIsMoving] = useState(false)

  const movePage = (dp, isAuto=false) => {
    if (isMoving) return
    setIsMoving(prev => true)
    if (!isAuto) {setClick(prev => true)}
    setCenter(prev=> center + dp)

    let newPage = page + dp
    if (newPage < 1) {newPage = banners.length}
    if (newPage > banners.length) {newPage = 1}
    setPage(prev => newPage)
  }

  useEffect(()=> {
    const movetimer = setTimeout(() => {
      setIsMoving(prev => false) 
      const newPNN = [page-1, page, page+1]
      if (page === banners.length) {newPNN[2] = 1}
      if (page === 1) {newPNN[0] = 0}
      setPNN(prev => newPNN)
      setCenter(prev => 1)
    }, 500);
    return () => { clearTimeout(movetimer) }
  }, [page])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!click) {
        movePage(1, true)
      }
    }, 300000);
    return () => { clearInterval(timer) }
  }, [click, movePage])
  
  return (
    <CarouselContainer>
      <CarouselContent page={page} center={center} $isMoving={isMoving}>
        {prevNowNext.map((n) => (
          <CarouselImage src={banners.at(n - 1).image} key={n}/>
        ))}
      </CarouselContent>
      
      <PageBox>
        {banners.map((e, i) => (
          <PageIcon 
            opacity={i + 1 === page ? 1 : 0.5} key={i}/>
          )
        )}
      </PageBox>

      <PrevButton color='white' width="3vw"
        onClick={() => movePage(-1)}
      />
      <NextButton color='white' width="3vw"
        onClick={() => movePage(1)}
      />

    </CarouselContainer>

  )
}

export default Carousel


const CarouselContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  overflow: hidden;
  margin-bottom: 30px;
`;

const CarouselContent = styled.div`
  display: flex;
  width: 300vw;
  transition: ${props => props.$isMoving ? "all, 0.5s" : "none"};
  transform: translateX(${props => -100 * props.center}vw);
`;


const CarouselImage = styled.img`
  width: 100vw;
`;

const PageBox = styled.div`
  position: absolute; 
  width: 3rem;
  bottom: 10%;
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
  opacity: ${props => props.opacity};
`