import { styled } from "styled-components";

const Rating = styled.div`
  display: block;
  height: 30px;
  margin-right: 20px;
  border: 1px solid blue;
  text-align: center;
`;

const ProductRating = ({ starCount }) => {
  return <Rating>{starCount}</Rating>;
};

export default ProductRating;
