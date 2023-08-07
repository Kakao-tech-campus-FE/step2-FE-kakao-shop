import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4.5rem;
  margin: 1rem 0;
  width: 100%;
  padding: 0 5rem;
  max-width: 1200px;
`;

export const ImageLoader = styled.div`
  width: 28rem;
  height: 11rem;
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

export const DeliveryLoader = styled.div`
  margin: 0.3rem 0;
  width: 4rem;
  height: 1.1rem;
  border-radius: 3px;
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

export const TitleLoader = styled.div`
  display: inline-block;
  width: 20rem;
  height: 3rem;
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

export const PriceTextContainerLoader = styled.div`
  width: 20rem;
  height: 2rem;
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
