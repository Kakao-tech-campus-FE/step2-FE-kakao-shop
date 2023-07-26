import Button from "@/components/atoms/button/Button.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";

const Styled = {
  Container: styled.div`
    width: 100%;
  `,
  ResultContainer: styled.div`
    margin-top: 1rem;
    padding: 1rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: ${({ theme }) => theme.border.default};
  `,
  Quantity: styled.div`
    font-size: 1.1rem;
  `,
  Price: styled.div`
    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.color.alert};
    }
  `,

  ButtonBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function ProductOptionResult({ handleAddCart, cart }) {
  const totalQuantity = cart?.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Styled.Container>
      <Styled.ResultContainer>
        <Styled.Quantity>총 수량 {totalQuantity}개</Styled.Quantity>
        <Styled.Price>
          총 주문금액 <strong>{totalPrice.toLocaleString()}</strong>원
        </Styled.Price>
      </Styled.ResultContainer>
      <Styled.ButtonBox>
        <Button
          onClick={handleAddCart}
          backgroundColor="#1e1e1e"
          style={{
            width: "47.5%",
            marginRight: "5%",
            padding: "1rem",
            borderRadius: "0.2rem",
          }}
        >
          장바구니
        </Button>
        <Button
          backgroundColor="#ffeb00"
          style={{
            width: "47.5%",
            padding: "1rem",
            color: "#000000",
            borderRadius: "0.2rem",
          }}
        >
          구매하기
        </Button>
      </Styled.ButtonBox>
    </Styled.Container>
  );
}

ProductOptionResult.propTypes = {
  handleAddCart: PropTypes.func,
  cart: PropTypes.array,
};

export default ProductOptionResult;
