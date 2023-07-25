import React from 'react'
import styled, { keyframes } from 'styled-components';   

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
`;

const Box = styled.div`
  animation: ${fadeIn} .3s ease-out;
`;

export const ToastBox = (props) => {
  return (
    <Box className='
        absolute bottom-3 right-3
        flex items-center
        h-12 px-5 py-1
        bg-black rounded-xl opacity-70
    '>{props.children}</Box>
  )
}

export const ToastContent = (props) => {
  return (
    <div className='
        text-white text-base min-w-[300px]
    '>{props.children}</div>
  )
}

export const ToastBtn = (props) => {
    return (
        <button onClick={props.onClick}
            className='ml-auto text-yellow-300 text-base'
        >
            {props.children}
        </button>
    )
}