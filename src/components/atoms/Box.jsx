import styled from "styled-components";

const StyledBox =
  // 아래의 style이 입혀진 button 태그를 생성
  styled.div`
    width: 70%;
    height: 100%;
    margin: 40px auto 42px;
    padding: 0 69px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 12px;
    box-sizing: border-box;
    word-wrap: break-word;
  `;
const Box = ({ children, className = "" }) => {
  // box 요소의 내용, css 적용위한 className
  // 이때 강의에서 box.css도 import 했는데 , 굳이 왜?
  return <StyledBox className={`box ${className}`}>{children}</StyledBox>;
};

export default Box;
