import React from 'react'
import Button from "../atoms/Button"
import { styled } from 'styled-components';

const UnderBtn = styled.div`
  text-align: center;
`

// active : true일때 (양식이 충족되었을 때) Button 컴포넌트의 색상 변함
// onClick : 클릭시 동작 (제출)
// children: 버튼 내용
// message: 오류시 오류 내용 표시 

const SubmitGroup = (props) => {
  return (
    <>
    <Button type="submit"
          active={props.active} 
          onClick={props.active ? props.onClick : null}>
      {props.children}
    </Button>
    <UnderBtn>{props.message}</UnderBtn>
    </>
  )
}

export default SubmitGroup