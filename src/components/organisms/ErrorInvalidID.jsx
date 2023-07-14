import React from 'react'
import { useQueryClient } from "react-query";
import styled from 'styled-components';   

const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin: auto;
`

const ErrorInvalidID = ( { error } ) => {
  const queryClient = useQueryClient();

  return (
    <StyledDiv>상품을 찾을 수 없습니다.</StyledDiv>
  )
}

export default ErrorInvalidID