import React from 'react'
import styled from 'styled-components';   

const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin: auto;
`

/**
 * 에러 페이지 컴포넌트 : 에러 메세지를 지정한 경우 에러 메세지 그대로 표시, 아닌 경우 상태코드에 맞는 에러 메세지 표시
 * @param {object} error
 * @param {string} errorMessage 
 * @returns 
 */
const ErrorFallback = ( { error, errorMessage } ) => {

    console.log("fallback", error)
    
    let message = "";

    if (errorMessage) {
      message = errorMessage
    }

    else if (!error.response) {
      message = error.message
    }

    else {
      const status = error.response.status;
      
      if (status >= 500) {
        message = "서버 에러";
      } else if (status === 404) {
        message = "해당 상품을 찾을 수 없습니다.";
      } else {
        message = "잘못된 접근입니다.";
      }
    }
    return <StyledDiv>{message}</StyledDiv>;
  };

export default ErrorFallback