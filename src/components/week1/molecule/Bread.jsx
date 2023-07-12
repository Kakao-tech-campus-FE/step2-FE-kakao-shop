import React from 'react'
import { useLocation } from "react-router-dom";
import BreadContainer from '../../atoms/breadcrum/BreadContainer';
import BreadButton from '../../atoms/breadcrum/BreadButton';


const pageName = {
  "" : "메인",
  "login" : "로그인",
  "pay" : "결제",
} 


const Bread = () => {
  
  const location = useLocation().pathname.split("/")
  if (location.at(-1) === "") {
    location.pop()
  }
  
  let string = "";

  return (
    <BreadContainer>
        {location.map((e,i) => {
          string += e + "/";
          return (
            <>
              {i !== 0 ? ">" : null}
              <BreadButton to={string}>
                  {pageName[e]}
              </BreadButton> 
            </>
          )
        })}
    </BreadContainer>
  )
}

export default Bread