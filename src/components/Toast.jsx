import React, { useState } from 'react'
import styled from 'styled-components';   

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
  padding: 5px 15px;
  transition: all 0.2s ease-out;
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

  const close = () => {
    setToast(val => false);
  }

  const btnClick = () => {
    setToast(true)
    const timer = setTimeout(close, 3000);
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