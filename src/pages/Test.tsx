import React from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import LinkBtn from '../components/common/LinkBtn';

function Test() {
  return (
    <Wrapper>
      <h1>상품 페이지</h1>
      <BreadCrumb />
      <LinkBtn to="./productDetail" content="제품 상세" />
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
