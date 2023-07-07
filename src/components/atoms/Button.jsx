import React from 'react';
import styled from 'styled-components';  


const BtnStyle = styled.button`
    height: 40px;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-family: Pretendard;
    margin: 10px;
    background-color: ${props=>props.bgcolor};
`

const Button = (props) => {
  return (
    <BtnStyle 
      type="submit"
      bgcolor={props.active ? "yellow" : "lightgray"}
      onClick={props.active ? props.onClick : undefined}>
      {props.children}
    </BtnStyle>
  );
};

  export default Button;