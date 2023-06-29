import React, { useState } from 'react'
import styled from 'styled-components';   

const Box = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
	background-color: black;
  border-radius: 10px;
  padding: 5px 15px;
`;

const Content = styled.span`       
	color: white;
  font-size: 1rem;
`;

const Undo = styled.div`
  margin-left: auto;
  color: red;
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

const Toast = () => {
  const [show, setShow] = useState(false)
  const [isUndo, setIsUndo] = useState(false)

  const popUp = () => {
    setShow(true)
  }
  const close = () => {
    setShow(false)
  }

  setTimeout(()=> {
    setShow(false)
  }, 10000)
  
  const undo = () => {
    setIsUndo(true)
  }

  return (
    <>
      <div>
        <button onClick={popUp}>토스트</button>

        <Box onClick={close} style={show ? active : hidden}>
          <Content>
            장바구니에서 삭제되었습니다.
          </Content>
          <Undo onClick={undo}>
            실행 취소
          </Undo>
        </Box>

        <p> {isUndo ? "실행취소" : null}</p>
      </div>
    </>
  )
}

export default Toast