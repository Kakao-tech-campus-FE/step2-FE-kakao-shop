import React, { useEffect, useState, Suspense } from "react";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import Section from "components/atoms/Section";
import SubmitButton from "components/atoms/SubmitButton";
import PageTitleBox from "components/atoms/PageTitleBox";
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

  /** 모음전 별 총 수량 { 모음전_id : 모음전_총_수량 } */
  const [productsQ, setProductsQ] = useState({});
  /** 장바구니 내부의 총 수량 */
  const [totalQ, setTotalQ] = useState(0);

  useEffect(() => {
    const newProductsQ = { ...productsQ };
    let total = 0;

    for (const product of query.data.products) {
      let q = 0;
      for (const option of product.carts) {
        q += option.quantity;
      }
      newProductsQ[product.id] = q;
      total += q;
    }

    setProductsQ((prev) => newProductsQ);
    setTotalQ((prev) => total);
  }, [query.data.products]);

  return (
    <>
      {query.data.products?.map(
        (collection) =>
          productsQ[collection.id] > 0 && (
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

      {totalQ === 0 && <Empty />}

      <TotalPrice
        price={!query.isFetching ? query.data.totalPrice : "-"}
        quantity={totalQ}
      />

      <SubmitButton onClick={submitHandler} disabled={totalQ === 0}>
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
