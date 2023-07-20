import { styled } from "styled-components";

const ProductCardSkeleton = () => {
  return (
    <Wrapper>
      <Img />
      <Tag />
      <Text />
      <Price />
    </Wrapper>
  );
};

export default ProductCardSkeleton;

const Wrapper = styled.div`
  width: 284px;
  margin: 0 20px 50px 0;
`;

const Skeleton = styled.div`
  position: relative;
  background-color: #f2f2f2;

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

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

const Img = styled(Skeleton)`
  width: 284px;
  height: 157px;
  border-radius: 8px;
`;

const Tag = styled(Skeleton)`
  width: 52px;
  height: 22px;
  margin: 10px 0 9px;
`;

const Text = styled(Skeleton)`
  height: 34px;
`;

const Price = styled(Skeleton)`
  height: 20px;
  margin-top: 7px;
`;
