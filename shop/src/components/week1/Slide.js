import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 500px;
  height: 500px;
  padding-left:40px;
`;