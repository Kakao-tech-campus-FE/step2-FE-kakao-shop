import React from "react";
import { comma } from "../../../utils/convert";

const TotalPrice = ({
  totalPrice,
  totalQuantity,
  immediateDiscount,
  talkDealDiscount,
}) => {
  const orderPrice = totalPrice - immediateDiscount - talkDealDiscount;

  return (
    <div className="total-price">
      <dl className="list-info">
        <dt className="float-left">상품금액 ({totalQuantity}개)</dt>
        <dd className="text-right">{comma(totalPrice)}원</dd>
        <dt className="float-left">즉시할인금액</dt>
        <dd className="text-right">{comma(immediateDiscount)}원</dd>
        <dt className="float-left">톡딜 할인금액</dt>
        <dd className="text-right">{comma(talkDealDiscount)}원</dd>
        <dt className="float-left">
          <strong>주문금액</strong>
        </dt>
        <dd className="text-right">
          <strong>{comma(orderPrice)}원</strong>
        </dd>
      </dl>
    </div>
  );
};

export default TotalPrice;
