import React, { useState } from 'react'
import { styled } from 'styled-components'
import left_button from '../assets/img/left_button.png'
import right_button from '../assets/img/right_button.png'

function Carousel() {

  const [idx, setIdx] = useState(1)


  const onLeftClick = () => {
    if(idx === 1)
      setIdx(4)
    else
      setIdx(idx-1)
  }

  const onRightClick = () => {
    if(idx === 4)
      setIdx(1)
    else
      setIdx(idx+1)
  }

  return (
   <>
    <CarouselWrap>
      <img onClick = {onLeftClick} style={{height:"50px", margin:"120px -10px 0 0px", zIndex: "1"}} src={left_button} alt="왼쪽 넘기기 버튼"/>
      <WrapUi>
        <MainUi styleobj = {idx}>
          <MainLi style={{backgroundColor: "red", }}>
          <span style={{position: "absolute", top: "100px", left: "180px", fontSize: "4rem", color: "white", fontWeight: "bold"}}>1</span>
          </MainLi>
          <MainLi style={{backgroundColor: "green"}}>
          <span style={{position: "absolute", top: "100px", left: "180px", fontSize: "4rem", color: "white", fontWeight: "bold"}}>2</span>
          </MainLi>
          <MainLi style={{backgroundColor: "pink"}}>
          <span style={{position: "absolute", top: "100px", left: "180px", fontSize: "4rem", color: "white", fontWeight: "bold"}}>3</span>
          </MainLi>
          <MainLi style={{backgroundColor: "blue"}}>
          <span style={{position: "absolute", top: "100px", left: "180px", fontSize: "4rem", color: "white", fontWeight: "bold"}}>4</span>
          </MainLi>
        </MainUi>
      </WrapUi>
      <img onClick = {onRightClick} style={{height: "50px", margin:"120px 0 0 -10px", zIndex: 1}} src={right_button} alt="오른쪽 넘기기 버튼"/>
      <CircleWrap>
        <Circle style={{backgroundColor: idx === 1 ? "black" : "white",}}></Circle>
        <Circle style={{backgroundColor: idx === 2 ? "black" : "white",}}></Circle>
        <Circle style={{backgroundColor: idx === 3 ? "black" : "white",}}></Circle>
        <Circle style={{backgroundColor: idx === 4 ? "black" : "white",}}></Circle>
      </CircleWrap>
    </CarouselWrap>
  </>
   
  )
}

export default Carousel


const CarouselWrap = styled.div`
 width: 585px;
 display: flex;
 position: relative;
`
const WrapUi = styled.div`
  width: 400px; 
  overflow: hidden;
`

const MainUi = styled.ul`
  padding-left: 0;
  display: flex;
  width: fit-content;
  margin-bottom: 0px;
  transition: 1s;
  transform: ${(props) =>  {if(props.styleobj===1) return "translateX(0px)"
  else if(props.styleobj===2) return "translateX(-400px)"
  else if(props.styleobj===3) return "translateX(-800px)"
  else if(props.styleobj===4) return "translateX(-1200px)"
}}
`
const MainLi = styled.li`
  width: 400px;
  height: 300px;
  text-align: center;
  position: relative;
  list-style: none;
`

const CircleWrap = styled.div`
  display: flex;
  position: absolute;
  left: 32%;
  bottom: -15px;
`

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  border: 1px black solid;
  margin: 5px;
`

