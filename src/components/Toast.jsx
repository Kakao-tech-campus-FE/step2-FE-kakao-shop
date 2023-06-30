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
`;

const Content = styled.span`       
	color: white;
  font-size: 1rem;
`;

const Undo = styled.div`
  margin-left: auto;
  color: yellow;
`

const active = {
  opacity: "0.7",
  transition: "opacity 500ms",
}

const hidden = {
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 500ms , visibility 500ms",
}

const Toast = ( {message, button, buttonstyle} ) => {
  const [toast, setToast] = useState(false);

  const btnClick = () => {
    setToast(true);
  };
  const toastClick = () => {
    setToast(false);
  };

  const timer = setTimeout(() => {
    setToast(false);
  }, 5000);

  return (
    <>
    <button onClick={btnClick} style={buttonstyle}>{button}</button>
    {toast ? (
      <Box onClick={toastClick}>
        <Content>
          {message}
        </Content>
        <Undo>
          실행 취소
        </Undo>
      </Box>
      ) : null}
  </>
  )
}

export default Toast