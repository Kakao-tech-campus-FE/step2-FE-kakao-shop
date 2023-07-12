import React from 'react';
import { styled, keyframes } from 'styled-components';
import colors from '../../../constants/colors';

interface StyledContent {
  width: number;
  height: number;
}
function Skeleton() {
  return (
    <Wrap>
      <Content width={180} height={140}></Content>
      <Content width={180} height={30}></Content>
      <Content width={100} height={20}></Content>
    </Wrap>
  );
}

export default Skeleton;

const skeletonAnimation = keyframes`
from{
    transform:translateX(-100%);
}
to{
    transform:translateX(100%);
}
`;

const Wrap = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div<StyledContent>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #d0d0d0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 5px;
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, transparent, #d9d9d9, transparent);
    animation: ${skeletonAnimation} 1s Infinite;
  }
`;
