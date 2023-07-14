import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin: 3em 0;
  width: 100%;
  max-width: 1200px;
`;

const ImageLoader = styled.div`
  width: 18em;
  height: 11em;
  background-color: #f2f2f2;
  border-radius: 10px;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

const NameLoader = styled.div`
  display: inline-block;
  width: 18em;
  height: 3em;
  border-radius: 5px;
  background-color: #f2f2f2;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

const PriceLoader = styled.div`
  width: 18em;
  height: 2em;
  border-radius: 5px;
  background-color: #f2f2f2;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

const CardSkeleton = () => {
  return (
    <Container>
      {new Array(15).fill('').map((_, i) => (
        <div key={i}>
          <ImageLoader />
          <NameLoader />
          <PriceLoader />
        </div>
      ))}
    </Container>
  );
};

export default CardSkeleton;
