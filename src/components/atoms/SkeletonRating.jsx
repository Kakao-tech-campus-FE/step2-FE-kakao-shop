import { styled } from "styled-components";

const Rating = styled.div`
  width: 150px;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(165, 165, 165, 0.2);
  animation: skeleton-gradient 2s infinite ease-in-out;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.2);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.4);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.2);
    }
  }
`;

const SkeletonRating = () => {
  return <Rating />;
};

export default SkeletonRating;
