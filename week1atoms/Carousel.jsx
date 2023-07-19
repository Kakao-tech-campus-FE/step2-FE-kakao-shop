import React, { useState } from 'react'
import styled from 'styled-components'
import prev_button from '../public/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.png'
import next_button from '../public/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.png'
import img1 from "../public/carouselItem1.jpeg"
import img2 from "../public/carouselItem2.jpeg"
import img3 from "../public/carouselItem3.jpeg"

function Carousel() {
    const [idx, setIdx] = useState(1)

    const next = () => { //캐러셀 다음 클릭
        if(idx === 3)setIdx(1)
        else setIdx(idx+1)
    }
    const prev = () => { //캐러셀 이전 클릭
        if(idx === 1) setIdx(3)
        else setIdx(idx-1)
    }

    return (
        <div className='Warp;'>
          
            <div className='Warp_ui;'>
            <img onClick = {prev} src={prev_button} alt = "이전 버튼 없음"/>
            <img onClick = {next} src={next_button} alt = "다음 버튼 없음"/>
                <MainUi style_obj = {idx}>
                    <img src = {img1} alt = "이미지 없음"></img>
                    <img src = {img2} alt = "이미지 없음"></img>
                    <img src = {img3} alt = "이미지 없음"></img>
                </MainUi>
            </div>

        </div>
    )
}

export default Carousel

const MainUi = styled.ul`
    display: flex;
    padding-left: 0; 
    margin-bottom: 0px;
    transition: 1s;
    transform: ${(props) =>  {
    if(props.style_obj===1) return "translateX(0px)"
    else if(props.style_obj===2) return "translateX(-2916px)"
    else if(props.style_obj===3) return "translateX(-5832px)"
}}
`