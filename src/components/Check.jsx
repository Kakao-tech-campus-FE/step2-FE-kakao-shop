import React from 'react'
import { styled } from 'styled-components';

const products = ['청소기', '에어컨', '냉장고'];

const List = styled.input`
  background-color: blue;
`

const Check = () => {
  return (
    <>
      {products.map((e, i) => {
        return <List key={i}>{e}</List>
        })}
    </>
  )
}

export default Check