import { styled } from "styled-components";

const Photo = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;
  border-radius: 10px;
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

const SkeletonPhoto = () => {
  return <Photo />;
};

export default SkeletonPhoto;
