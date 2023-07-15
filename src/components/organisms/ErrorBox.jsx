import React from 'react'
import styled from 'styled-components';   

const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin: auto;
`

const ErrorBox = ( props ) => {

  if (props.errorMessage) {
    return <StyledDiv>{props.errorMessage}</StyledDiv>
  }

  const status = props.errorObject.response.status;
  let message = '';

  if (status >= 500) {
    message = '서버 에러';
  }
  else if (status === 404) {
    message = '해당 상품을 찾을 수 없습니다.'
  }
  else {
    message = '잘못된 접근입니다.'
  }
  return (
    <StyledDiv>{message}</StyledDiv>
  )
}

export default ErrorBox