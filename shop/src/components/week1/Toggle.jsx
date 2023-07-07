import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 80px;
  left: 50%;
  cursor: pointer;

  .toggle-container {
    width: 50px;
    height: 25px;
    border-radius: 30px;
    background-color: darkcyan;
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  .toggle-container.toggle--checked {
    background-color: lightseagreen;
    transition : 0.5s
  }

  .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    transition : 0.5s
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  .toggle-circle.toggle--checked {
    left: 27px;
    transition : 0.5s
  }
`;

// 토글 되었을 떄 글씨 스타일링
const Description = styled.h1`
  position: absolute;
  top:20px;
  left:-20%;

`
export default function Toggle() {
  const [isOn, setisOn] = useState(false);  // 처음 상태는 false로 켜지지 않은 상태
  const toggleHandler=()=>{
    //isOn의 상태를 변경하는 메소드
    setisOn(!isOn)
  }

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}/>
        {
        isOn === false ?
        <Description>[ Toggle ] 버튼이 꺼져있습니다.</Description>:
        <Description>[ Toggle ] 버튼이 켜져있습니다.</Description>
        }
      </ToggleContainer>
      
    </>
  )
}
