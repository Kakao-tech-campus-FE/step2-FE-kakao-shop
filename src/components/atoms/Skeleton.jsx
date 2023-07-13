import React from 'react';
import styled, { keyframes } from 'styled-components';

// 애니메이션 키프레임 정의
const skeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// 스타일드 컴포넌트로 스켈레톤 박스 정의
const SkeletonBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e8e8e8 0%, #f5f5f5 50%, #e8e8e8 100%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s linear infinite;
  border-radius: 4px;
  margin-bottom: 8px;
  object-fit: cover;
`;

function Skeleton(props) {
  return (
      <SkeletonBox>{props.children}</SkeletonBox>
  );
}

export default Skeleton;
