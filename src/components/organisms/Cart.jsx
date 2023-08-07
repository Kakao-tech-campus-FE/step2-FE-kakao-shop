import React from "react";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import SubmitButton from "components/atoms/SubmitButton";
import { CartOptionBox, CartCollectionBox } from "components/atoms/cart/";
import TotalPrice from "components/molecules/TotalPrice";
import OptionSelected from "components/molecules/DetailPageOption/OptionSelected";
import Counter from "components/molecules/Counter";

import { getCarts, updateCart } from "api/cart";

const path = process.env.REACT_APP_PATH || "";

const Cart = () => {
  const navigate = useNavigate();

  /** 장바구니 객체 get */
  const query = useQuery(["getCarts"], getCarts, {
    suspense: true,
    onError: () => navigate(path + "/login"),
  });

  const mutation = useMutation(updateCart, {
    onSuccess: () => query.refetch(),
    onError: () => navigate(path + "/login"),
  });

  const changeCart = (id, newQuantity, clear = false) => {
    if (newQuantity === 0 && !clear) return;
    mutation.mutate([{ cartId: id, quantity: newQuantity }]);
  };

  /** 제출버튼 클릭 시 주문 요청 */
  const submitHandler = () => {
    navigate(path + "/order");
  };

  const [
    productsData, 
    totalPrice, 
    totalQuantity, 
    validCollections
  ] = query.data

  return (
    <>
      {productsData?.map(
        (collection) =>
          validCollections.has(collection.id) && (
            <CartCollectionBox id={collection.id} key={collection.productName}>
              <span className="font-bold m-2">{collection.productName}</span>

              {collection.carts.map(
                (optionItem) =>
                  optionItem.quantity > 0 && (
                    <CartOptionBox key={optionItem.option.optionName}>
                      <OptionSelected
                        optionName={optionItem.option.optionName}
                        price={optionItem.price}
                        clear={() => {
                          changeCart(optionItem.id, 0, true);
                        }}
                        counterComponent={
                          <Counter
                            id={optionItem.id}
                            value={optionItem.quantity}
                            valueUpdateHandler={changeCart}
                          />
                        }
                      />
                    </CartOptionBox>
                  )
              )}
            </CartCollectionBox>
          )
      )}

      {totalQuantity === 0 && <Empty />}

      <TotalPrice
        price={!query.isFetching ? totalPrice : "-"}
        quantity={totalQuantity}
      />

      <SubmitButton onClick={submitHandler} disabled={totalQuantity === 0}>
        주문하기
      </SubmitButton>
    </>
  );
};

export default Cart;

const Empty = () => {
  return (
    <div className="flex h-40">
      <span className="m-auto">장바구니가 비어있습니다</span>
    </div>
  );
};
