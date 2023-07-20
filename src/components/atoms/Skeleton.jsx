import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonBox = styled.div`
  width: 95%;
  height: ${props=>props.height};
  background: linear-gradient(to right, #e8e8e8 0%, #f5f5f5 50%, #e8e8e8 100%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s linear infinite;
  border-radius: 4px;
  margin-bottom: 8px;
  object-fit: cover;
`;

/**
 * 스켈레톤 : 부모 요소의 크기에 맞게 늘어나는 애니메이션 박스 
 * @param {*} props
 * @param {string} props.height - 높이 지정, 미지정시 부모요소의 95%
 * @param {*} props.children
 * @returns 
 */
function Skeleton(props) {
  return (
      <SkeletonBox height={props.height ? props.height : "95%"}>{props.children}</SkeletonBox>
  );
}

export default Skeleton;
