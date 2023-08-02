import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ProductOptionAccordion from "@/components/molecules/product-option-accordion/ProductOptionAccordion.jsx";
import SelectedProductOption from "@/components/molecules/selected-product-option/SelectedProductOption.jsx";
import useAddCartItemMutation from "@/hooks/useAddCartItemMutation.js";
import ProductOptionResult from "@/components/molecules/product-option-result/ProductOptionResult.jsx";
import { useAtomValue } from "jotai";
import accessTokenAtom from "@/storage/common/accessToken.atom.js";
import Modal from "@/components/molecules/modal/Modal.jsx";

const Styled = {
  Container: styled.article`
    padding: 2rem 0 0 2rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 1400px) {
      width: 100%;
      padding: 2rem 0 0;
    }
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addCartMutation = useAddCartItemMutation();
  const accessToken = useAtomValue(accessTokenAtom);

  const handleAddCart = () => {
    if (!accessToken) {
      return setIsModalOpen(true);
    }

    const items = cart.map((item) => {
      return { optionId: item.optionId, quantity: item.quantity };
    });
    addCartMutation.mutate({ items });
  };

  return (
    <Styled.Container>
      <Styled.SelectPurchase>
        <Styled.Strong>옵션 선택</Styled.Strong>
        <ProductOptionAccordion
          options={options}
          cart={cart}
          setCart={setCart}
        />

        <div>
          {cart.map((item) => (
            <SelectedProductOption
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

      <ProductOptionResult handleAddCart={handleAddCart} cart={cart} />

      {isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} style={{ width: "17rem" }}>
          상품을 장바구니에 담으려면 먼저 로그인을 해야 합니다
        </Modal>
      )}
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
