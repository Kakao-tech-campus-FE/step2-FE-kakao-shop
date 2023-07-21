import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin: 3em 0;
  width: 100%;
  max-width: 1200px;
`;

const skeletonAnimation = keyframes`
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
`;

const ImageLoader = styled.div`
  width: 18em;
  height: 11em;
  background-color: #f2f2f2;
  border-radius: 10px;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`;

const TitleLoader = styled.div`
  display: inline-block;
  width: 18em;
  height: 3em;
  border-radius: 5px;
  background-color: #f2f2f2;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`;

const PriceTextContainerLoader = styled.div`
  width: 18em;
  height: 2em;
  border-radius: 5px;
  background-color: #f2f2f2;
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`;

const CardLoader = () => {
  return (
    <Container>
      {new Array(15).fill('').map((_, i) => (
        <div key={i}>
          <ImageLoader />
          <TitleLoader />
          <PriceTextContainerLoader />
        </div>
      ))}
    </Container>
  );
};

export default CardLoader;