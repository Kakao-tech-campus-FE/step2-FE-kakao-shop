import React from "react";

const OrderCompleteTemplate = () => {
  return (
    <div className="orderComplete-container">
      <div className="complete-innerwrap">
        <div className="complete-messagebox">
          <div className="complete-messages">
            <span className="complete-num">주문번호 : 12345678abc</span>
            <span className="message1">구매완료!</span>
            <span className="message2">구매가 정상적으로 완료되었습니다.</span>
          </div>
          <div className="complete-next-buttons">
            <button className="next-button1">전체 주문 내역</button>
            <button className="next-button2">쇼핑 계속하기</button>
          </div>
        </div>

        <div className="complete-info" id="complete-deliveryinfo">
          <div className="complete-info-tit">
            <span>배송지 정보</span>
          </div>
          <div className="complete-info-content"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleteTemplate;
