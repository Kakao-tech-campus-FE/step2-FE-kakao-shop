import React, { useState } from 'react'
import styled from 'styled-components';   

const Box = styled.div`
  display: flex;
  width: 300px;
	background-color: black;
  border-radius: 20px;
  padding: 5px 15px;
`;

const Content = styled.span`       
	color: white;
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
  const [val, setVal] = useState(false)

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
    setVal(true)
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

        <p> {val ? "실행취소" : null}</p>
      </div>
    </>
  )
}

export default Toast