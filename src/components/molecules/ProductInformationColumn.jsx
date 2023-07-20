import React from 'react'
import { comma } from "../../utils/convert"
import Photo from "../atoms/Photo"
import Containor from '../atoms/Containor'
import { styled } from 'styled-components'
import Title from '../atoms/Title'


function ProductInformationColumn( { product }) {
  const { productName, price, image } = product
  return (
    <Containor>
      <Column>
        <Photo src={image} alt={productName}/>
      </Column>
      <Column>
        <Title>{productName}</Title>
        <PText>{comma(price)}원</PText>
      </Column>
    </Containor>
  )
}

export default ProductInformationColumn

const Column = styled.div`

`

const PText = styled.p`

`
