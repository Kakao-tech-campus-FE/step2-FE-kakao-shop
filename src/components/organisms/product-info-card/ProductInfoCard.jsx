import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import routes from "@/constants/routes.js";
import ThumbCard from "@/components/molecules/thumb-card/ThumbCard.jsx";

const Styled = {
  Container: styled.div``,
  Card: styled.div`
    width: 100%;
    box-sizing: content-box;
    cursor: pointer;
  `,
  Name: styled.div`
    padding-top: 10px;
    font-size: 0.85rem;
    line-height: 1.25rem;
  `,
  Price: styled.div`
    padding-top: 8px;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.07rem;
  `,
};

function ProductInfoCard({ id, productName, image, price }) {
  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`${routes.product}/${id}`);
  };

  return (
    <Styled.Container>
      <Styled.Card onClick={() => onCardClick(id)}>
        <ThumbCard imgSrc={image} imgAlt={productName} />
        <Styled.Name>{productName}</Styled.Name>
        <Styled.Price>{price.toLocaleString()}원</Styled.Price>
      </Styled.Card>
    </Styled.Container>
  );
}

ProductInfoCard.propTypes = {
  id: PropTypes.number,
  productName: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

ProductInfoCard.defaultProps = {
  id: 1,
  productName: "상품 이름",
  image: "/images/1.jpg",
  price: 5000,
};

export default ProductInfoCard;
