import React from 'react'
import Containor from '../atoms/Containor'
import styled, {keyframes} from "styled-components"

function Loader() {
  return (
    <Containor style={{width: '100%', height: '100%'}}>
      <LoaderContainor >
        <div></div>
        <div style={{animationDelay: '-1.1s',}}></div>
        <div style={{animationDelay: '-1s',}}></div>
        <div style={{animationDelay: '-0.9s',}}></div>
        <div style={{animationDelay: '-0.8s',}}></div>
      </LoaderContainor>
    </Containor>
  )
}

export default Loader


const stretchDelay = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    }
  }
`

const LoaderContainor = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  & > div{
    background-color: #00d1b2;
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: ${stretchDelay} 1.2s infinite ease-in-out;
    margin-left: 2px;
  }
`
