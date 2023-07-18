import { styled } from "styled-components";
import { Rate } from "antd";

const Rating = styled.div`
  width: 150px;
  height: 30px;
`;

const override = {
  color: "#4683E9",
};

const ProductRating = ({ starCount }) => {
  return (
    <Rating>
      <Rate
        disabled
        count={starCount}
        defaultValue={starCount}
        style={override}
      />
    </Rating>
  );
};

export default ProductRating;
