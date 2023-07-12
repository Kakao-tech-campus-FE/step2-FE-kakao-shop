import React from 'react'
import styled from 'styled-components';   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Next = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  z-index: 3;
`

const NextButton = (props) => {
  return (
    <Next onClick={props.onClick}>
        <FontAwesomeIcon icon={faAngleRight} style={ {color:'white'} }/> 
    </Next>
  )
}

export default NextButton