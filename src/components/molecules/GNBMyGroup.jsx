import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
`

/**
 * GNB 우측 my메뉴 모음 박스
 * @param {object} props
 * @param {*} props.children - My 메뉴 박스에 위치할 메뉴들
 * @returns {*}
 */
const GNBMyGroup = (props) => {
  return (
      <Container>
        {props.children}
      </Container>
  )
}

export default GNBMyGroup