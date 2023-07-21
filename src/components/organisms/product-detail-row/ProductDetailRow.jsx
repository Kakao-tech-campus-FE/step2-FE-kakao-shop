import styled from "styled-components";
import Stars from "@/components/atoms/stars/Stars.jsx";
import PropTypes from "prop-types";

const Styled = {
  Container: styled.article`
    padding: 30px 30px 0 0;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    border-right: ${({ theme }) => theme.border.default};
  `,
  ThumbImage: styled.img`
    width: 430px;
    height: 430px;
    object-fit: cover;
  `,
  Detail: styled.div`
    width: 430px;
    margin-left: 30px;
  `,
  Title: styled.strong`
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  Price: styled.div`
    padding-top: 0.5rem;
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.07rem;
  `,
};

function ProductDetailRow({ imgSrc, starCount, productName, price }) {
  return (
    <Styled.Container>
      <Styled.ThumbImage
        src={import.meta.env.VITE_SHOP_API + imgSrc}
        alt={productName}
      />
      <Styled.Detail>
        <Stars starCount={starCount} style={{ paddingBottom: "0.5rem" }} />
        <Styled.Title>{productName}</Styled.Title>
        <Styled.Price>{price.toLocaleString()}원~</Styled.Price>
      </Styled.Detail>
    </Styled.Container>
  );
}

ProductDetailRow.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  starCount: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetailRow;
