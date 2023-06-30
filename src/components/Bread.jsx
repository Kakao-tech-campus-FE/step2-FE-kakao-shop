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

const aText = {
  textDecoration:"none", 
  color: "black",
}

const hidden = {
  opacity:"0"
}

const routeTree = {
  name: "메인",
  path: "/",
  sub: [
    {
      name: "장바구니",
      path: "cart",
      sub: [
        {
          name: "결제",
          path: "pay",
          sub : null,
        }
      ],
    }
  ],
};

const Bread = () => {


  return (
    <Container>

        <Link style={aText} to="/">
            <Text>메인</Text>
        </Link> 
        
        {">"}
        <Link style={aText} to="/cart">
            <Text>장바구니</Text>
        </Link> 
        
        {">"}
        <Link style={aText} to="/cart/pay">
            <Text>결제</Text>
        </Link>

    </Container>
  )
}

export default Bread