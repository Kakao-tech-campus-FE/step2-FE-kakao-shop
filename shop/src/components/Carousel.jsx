import React, { useState,useEffect, useRef } from 'react'
import styled from 'styled-components'
import img1 from '../img/그로밋.png'
import img2 from '../img/맹구2.webp'
import img3 from '../img/짱구.png'
import Slide from './Slide'

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수 (총3개. 배열로 계산)

const name =['그로밋', '맹구', '짱구']

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0) //현재 슬라이드가 몇번째 인지를 나타내는 상태  
  const slideRef = useRef(null);  // 슬라이드 컨테이너를 참조하는 역할

  const NextSlide = () => {
    if(currentSlide >= TOTAL_SLIDES){
      // 더이상 넘어갈 슬라이드가 없음
      setCurrentSlide(0) //처음 사진으로 넘어감 
    } else{
      setCurrentSlide(currentSlide + 1)
    }
  }

  const PrevSlide = () =>{
    if (currentSlide ===0){
      setCurrentSlide(2) // 마지막 사진으로 넘어간다.
    }else{
      setCurrentSlide(currentSlide -1)
    }
  }

  //useRef 를 통해 Slider의 정보를 넘겨준다.
  //currentSlide가 변할때마다 translate와 transition 효과를 준다. 
  //slideRef.current를 통해 실제 DOM 요소에 접근
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <h1 style={{paddingLeft:'33px'}}>[ Carousel ]</h1>
      <h1 style={{paddingLeft:'33px'}}>내가 좋아하는 캐릭터</h1>
      <Text>
        <p>{currentSlide + 1}번 째 사진</p>
        <p>{name[currentSlide]}</p>
      </Text>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
      </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>Prev</Button>
        <Button onClick={NextSlide}>Next</Button>
      </Center>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  top:250px;
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`
const Button = styled.div`
  all: unset; // 버튼 스타일 초기화 
  padding: 1em 2em;
  margin: 2em 2em;
  color: lightseagreen;
  border-radius: 10px;
  border: 1px solid lightseagreen;
  cursor: pointer;
  &:hover {
    background-color: lightseagreen;
    color: #fff;
  }
`
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex; // 이미지들을 가로로 나열합니다.
`
const Text = styled.div`
  text-align:center;
  color: black;
  p {
    color: #fff;
    font-size: 20px;
    background-color: lightseagreen;
    display: inline-block;
    border-radius: 4px;
    padding: 0.5em 1em;
    margin-left: 20px;
  }
`
const Center = styled.div`
  text-align: center;
`
