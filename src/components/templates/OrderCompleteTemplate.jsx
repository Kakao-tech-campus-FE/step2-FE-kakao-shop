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
  );
};

export default OrderCompleteTemplate;
