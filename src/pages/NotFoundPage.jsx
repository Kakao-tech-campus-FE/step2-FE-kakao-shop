import React from 'react';
import styled  from 'styled-components';

const StyledHeader = styled.h1`
  font-size:80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NotFoundPage = () => {
  return (
  <>
    <StyledHeader>
      404 - Page Not Found
    </StyledHeader>
    <br/>
    <div className='text-xl text-center'>상품을 찾을 수 없습니다.<br/> 상품 주소를 다시 확인해주세요.</div>
  </>
  );
};

export default NotFoundPage;