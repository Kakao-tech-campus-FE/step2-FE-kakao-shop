import React from 'react'
import styled from 'styled-components';   
import { useLocation, Link } from "react-router-dom";


const Container = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  border-radius: 5px;
  padding: 0 15px;
  background-color: white;
  margin: 20px;
`

const Text = styled.div`
  margin: 10px;
`

const linkStyle = {
  textDecoration:"none", 
  color: "black",
}

const pageName = {
  "" : "메인",
  "cart" : "장바구니",
  "pay" : "결제",
} 


const Bread = () => {
  
  // nowDir(routeTree , pageName, [])
  const location = useLocation().pathname.split("/")
  if (location.at(-1) === "") {
    location.pop()
  }
  var string = "";

  return (
    <Container>
        {location.map((e,i) => {
          string += e + "/";
          return (
            <>
              {i !== 0 ? ">" : null}
              <Link style={linkStyle} to={string}>
                  <Text>{pageName[e]}</Text>
              </Link> 
            </>
          )
        })}

    </Container>
  )
}

export default Bread