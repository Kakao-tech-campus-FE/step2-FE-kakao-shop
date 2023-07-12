import React from 'react'
import styled from 'styled-components';   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Prev = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 3;
`

const PrevButton = (props) => {
  return (
    <Prev onClick={props.onClick}>
        <FontAwesomeIcon icon={faAngleLeft} style={ {color:'white'} }/>
    </Prev>
  )
}

export default PrevButton