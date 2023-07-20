import React from 'react'
import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 5px;
  color: #000;
`;

const StyledProductImage = styled.picture`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  animation: ${skeletonLoading} 1.5s ease-in-out infinite;
`;

const StyledProductName = styled.p`
  width: 150px;
  height: 20px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
  animation: ${skeletonLoading} 1.5s ease-in-out infinite;
`;

const StyledProductPrice = styled.p`
  width: 80px;
  height: 15px;
  background-color: #f0f0f0;
  animation: ${skeletonLoading} 1.5s ease-in-out infinite;
`;


const Skeleton = () => {
  return (
    <StyledCard>
      <StyledProductImage/>
      <StyledProductName/>
      <StyledProductPrice/>
    </StyledCard>
  )
}

export default Skeleton