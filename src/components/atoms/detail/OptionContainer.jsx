import React from 'react'
import { styled } from 'styled-components'

const Section = styled.aside`
    border: 1px solid purple;
    width: 33%
`

const OptionContainer = (props) => {
  return (
    <Section>{props.children}</Section>
  )
}

export default OptionContainer