import { useState } from "react";
import styled from "styled-components";

import OptionAccordion from "@/components/molecules/option-accordion/OptionAccordion.jsx";
import BasketOption from "@/components/molecules/cart-option/CartOption.jsx";
import useAddCartItemMutation from "@/hooks/useAddCartItemMutation.js";
import OptionResult from "@/components/molecules/option-result/OptionResult.jsx";
import PropTypes from "prop-types";

const Styled = {
  Container: styled.article`
    padding: 30px 0 0 30px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  SelectPurchase: styled.div`
    width: 100%;
    max-height: 22.5rem;
    overflow-y: auto;
  `,
  Strong: styled.div`
    font-weight: 600;
    padding: 0 0 0.75rem 0.1rem;
  `,
  ButtonBox: styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

function ProductOptionRow({ options }) {
  const [cart, setCart] = useState([]);
  const addCartMutation = useAddCartItemMutation();

  const handleAddCart = () => {
    const items = cart.map((item) => {
      return { optionId: item.optionId, quantity: item.quantity };
    });
    addCartMutation.mutate({ items });
  };

  return (
    <Styled.Container>
      <Styled.SelectPurchase>
        <Styled.Strong>옵션 선택</Styled.Strong>
        <OptionAccordion options={options} cart={cart} setCart={setCart} />

        <div>
          {cart.map((item) => (
            <BasketOption
              key={item.optionId}
              optionId={item.optionId}
              optionName={item.optionName}
              quantity={item.quantity}
              price={item.price}
              setCart={setCart}
            />
          ))}
        </div>
      </Styled.SelectPurchase>
      <OptionResult handleAddCart={handleAddCart} cart={cart} />
    </Styled.Container>
  );
}

ProductOptionRow.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};

export default ProductOptionRow;
