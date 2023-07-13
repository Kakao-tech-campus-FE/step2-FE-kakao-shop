import React from 'react'
import { styled } from 'styled-components'


const Section = styled.section`
    background-color: red;
`

const ImgBox = (props) => {
  return (
    <Section>{props.children}</Section>
  )
}

export default ImgBox