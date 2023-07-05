import React from 'react';
import { styled } from 'styled-components';
import BreadCrumb from '../components/common/BreadCrumb';
import { Link } from 'react-router-dom';

function Test2() {
  return (
    <Wrapper>
      <h2>productDetail Page</h2>
      <BreadCrumb />
    </Wrapper>
  );
}

export default Test2;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
