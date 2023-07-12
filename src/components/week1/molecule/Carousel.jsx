import React, { useState, useEffect } from 'react'

import CarouselContainer from '../../atoms/carousel/CarouselContainer';
import CarouselContent from '../../atoms/carousel/CarouselContent';
import CarouselImage from '../../atoms/carousel/CarouselImage';
import CarouselPage from '../../atoms/carousel/CarouselPage';
import PrevButton from '../../atoms/carousel/PrevButton';
import NextButton from '../../atoms/carousel/NextButton';

import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.png'
import banner3 from '../../../assets/banner3.png'

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

/**
 * banners 배열 속 객체들로 Carousel을 생성하는 컴포넌트
 * @returns {*}
 */
const Carousel = () => {
  const [page, setPage] = useState(1)
  const [click, setClick] = useState(false)

  const newPage = (p, type, jump=null) => {
    if (type === 'next') {
      if (p < banners.length) {
        return p + 1
      } else {
        return 1
      }
    } else if (type === 'prev') {
      if (p === 1) {
        return banners.length
      } else {
        return p - 1
      }
    } else if (type === 'jump') {
      return jump
    }
  }

  const movePage = (p, type, jump) => {
    setClick(prev => true)
    setPage(newPage(p, type, jump))
  }

  useEffect(() => {
  const timer = setInterval(() => {
      if (!click) {
        setPage((page) => newPage(page, 'next'))
      }
    }, 5000);
    return () => { clearInterval(timer) }
  }, [click])
  
  return (
    <>
      <CarouselContainer>

        <CarouselContent page={page}>
          {banners.map((item, i) => (
            <CarouselImage src={item.image} />
          ))}
        </CarouselContent>
        

        <CarouselPage
          list = {banners}
          func = {movePage}
          page = {page}
        />

        <PrevButton 
          onClick={() => movePage(page, 'prev')}
        />
        <NextButton 
          onClick={() => movePage(page, 'next')}
        />

      </CarouselContainer>
    </>
  )
}

export default Carousel
