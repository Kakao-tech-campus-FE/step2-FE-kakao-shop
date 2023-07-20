import React from 'react'
import { styled } from 'styled-components'

const Section = styled.section`
    border: 1px solid blue;
`

const InfoBox = (props) => {
  return (
    <Section>{props.children}</Section>
  )
}

export default InfoBox