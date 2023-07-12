import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-right: auto;
`

/**
 * GNB 좌측 메인메뉴 모음 박스
 * @param {object} props
 * @param {*} props.children - 메인 메뉴 박스에 위치할 메뉴들
 * @returns {*}
 */
const GNBMainGroup = (props) => {
  return (
      <Container>
        {props.children}
      </Container>
  )
}

export default GNBMainGroup