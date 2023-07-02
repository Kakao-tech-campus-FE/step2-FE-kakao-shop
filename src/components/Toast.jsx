import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';   

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Box = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
	background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 5px 20px;
  animation: ${fadeIn} .3s ease-out;
`;

const Content = styled.span`       
	color: white;
  font-size: 1rem;
`;

const Undo = styled.div`
  margin-left: auto;
  color: yellow;
`

const Toast = ( {message, button, buttonStyle} ) => {
  const [toast, setToast] = useState(false);

  const timeEffect = () => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000)
    return () => { clearTimeout(timer) }
  }

  useEffect(timeEffect, [toast])

  const btnClick = () => {
    setToast(true)
  };

  const toastClick = () => {
    setToast(val => false);
  };

  return (
    <>
    <button onClick={btnClick} style={buttonStyle}>{button}</button>
    {toast ? (
      <Box onClick={toastClick}>
        <Content>
          {message}
        </Content>
        <Undo>
          닫기
        </Undo>
      </Box>
    ) : null}
  </>
  )
}

export default Toast