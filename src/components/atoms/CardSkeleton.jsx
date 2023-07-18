import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;;
  margin: 2em 0;
  width: 100%;
  max-width: 1200px;
  max-width: inherit;
`;

const ImageLoader = styled.div`
  width: 21em;
  height: 13em;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  background-color: #e7e5e5;
  border-radius: 5px;
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
  width: 21em;
  height: 3em;
  border-radius: 5px;
  background-color: #e7e5e5;
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
  width: 21em;
  height: 2em;
  border-radius: 5px;
  background-color: #e7e5e5;
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
