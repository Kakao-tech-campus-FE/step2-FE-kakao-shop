import { lazy } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import routes from "@/constants/routes.js";
const ThumbCard = lazy(() =>
  import("@/components/molecules/thumb-card/ThumbCard.jsx")
);

const Styled = {
  Container: styled.div`
    height: 17.75rem;
  `,
  Card: styled.div`
    width: 17.75rem;
    margin: 0 10px auto;
    box-sizing: content-box;
    cursor: pointer;
  `,
  Name: styled.div`
    padding-top: 10px;
    font-size: 0.85rem;
  `,
  Price: styled.div`
    padding-top: 8px;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.07rem;
  `,
};

function ProductInfoCard({ id, productName, description, image, price }) {
  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`${routes.product}/${id}`);
  };

  const changeNumToMonetaryUnit = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Styled.Container>
      <Styled.Card onClick={() => onCardClick(id)}>
        <ThumbCard badge={description} imgSrc={image} imgAlt={productName} />
        <Styled.Name>{productName}</Styled.Name>
        <Styled.Price>{changeNumToMonetaryUnit(price)}원</Styled.Price>
      </Styled.Card>
    </Styled.Container>
  );
}

ProductInfoCard.propTypes = {
  id: PropTypes.number,
  productName: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

ProductInfoCard.defaultProps = {
  id: 1,
  productName: "상품 이름",
  description: "배지",
  image: "/images/1.jpg",
  price: 5000,
};

export default ProductInfoCard;
