<<<<<<< HEAD
import styled from "styled-components";
import OptionItem from "../atoms/OptionItem";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";

const ProductList = styled.div`
  padding: 1rem;
  .label {
    font-weight: bold;
    font-size: 0.8rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const productItems = (products) => {
  return products.map((product) => {
    return (
      <div className="flex flex-col gap-2 mb-4" key={product.id}>
        <div className="font-bold text-sm">상품명</div>
        <p className="text-lg text-gray-400">{product.productName}</p>
        <OptionItem items={product.item} />;
      </div>
    );
  });
};

const OrderCompleteTemplate = ({ data }) => {
  const navigate = useNavigate();
  const example = data?.data;

  if (example) {
    return <></>;
  }

  return (
    <section className="py-10 my-10 mx-auto max-w-[500px] w-full">
      <div className="text-center py-10">
        <h1 className="text-xl font-bold">구매완료!</h1>
        <h2 className="text-lg">구매가 정상적으로 완료됐습니다.</h2>
      </div>
      <div className="border mb-4">
        <div className="text-sm border-b p-4 border-gray-200 text-center font-bold">
          주문상품 정보
        </div>
        <ProductList>
          {productItems(example.response.products)}
          <div className="font-bold text-lg">총 금액</div>
          <p className="text-cl">{comma(example.response.totalPrice)}원</p>
        </ProductList>
      </div>

      <div className="border">
        <div className="flex justify-between p-4">
          <span className="font-bold text-xl">일반 결제 금액</span>
          <span className="font-bold text-xl text-indigo-700">
            {comma(example.response.totalPrice)}원
          </span>
        </div>
        <button
          className="w-full py-4 text-black bg-yellow-400 font-bold text-xl"
          onClick={() => {
            //주문 완료 후 메인 페이지로 이동
            navigate("/");
          }}
        >
          쇼핑 계속하기
        </button>
      </div>
    </section>
=======
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderById } from "../../services/order";
import { comma } from "../../utils/convert.js";
import Button from "../atoms/Button";

const OrderCompleteTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useQuery(`orders/${id}`, () => getOrderById(id), {
    suspense: true,
  });
  const { products, totalPrice } = data?.data?.response;

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  return (
    <div>
      <div>
        <h1>주문이 정상적으로 처리되었습니다.</h1>
      </div>
      <div>
        <h1>주문 내역</h1>
        {products.map((product) =>
          product.items.map((item) => (
            <div key={item.id}>
              <div>
                <span>{`${product.productName} - ${item.optionName}`}</span>
              </div>
              <div>
                <span>{comma(item.quantity)}개</span>
              </div>
              <div>
                <span>{comma(item.quantity * item.price)}원</span>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <div>
          <h2>총 주문 금액</h2>
          <span>{comma(totalPrice)}원</span>
        </div>
        <Button onClick={() => navigate("/")}>메인 화면</Button>
      </div>
    </div>
>>>>>>> 003f6137052531724667909b8aee43a2ed641ab1
  );
};

export default OrderCompleteTemplate;
