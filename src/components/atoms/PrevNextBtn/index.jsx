import React from 'react'
import styled from 'styled-components';   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const BtnBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
`

export const NextButton = ( {color, width, onClick} ) => {
  return (
    <BtnBox onClick={onClick} style={{right: '5%'}}>
        <FontAwesomeIcon icon={faAngleRight} style={{color:color, width:width, height:width}}/> 
    </BtnBox>
  )
}

export const PrevButton = ( {color, width, onClick} ) => {
  return (
    <BtnBox onClick={onClick} style={{left: '5%'}}>
        <FontAwesomeIcon icon={faAngleLeft} style={{color:color, width:width, height:width}}/>
    </BtnBox>
  )
}
