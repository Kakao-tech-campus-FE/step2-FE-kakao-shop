import React from "react";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";

const OrderCompleteTemplate = ({ data }) => {
  const navigate = useNavigate();
  const { products, totalPrice } = data?.data?.response;

  const OrderedItems = () => {
    const groupedProducts = {};

    // 상품들을 productName을 기준으로 그룹화
    products.forEach((product) => {
      if (!groupedProducts[product.productName]) {
        groupedProducts[product.productName] = [];
      }
      groupedProducts[product.productName].push(product);
    });

    // 그룹화된 상품들을 UI에 렌더링
    return Object.keys(groupedProducts).map((productName) => (
      <div key={productName} className="ordered-product">
        <div className="namegroup">
          <span className="material-symbols-outlined">storefront</span>
          <span className="prodcut-name">{`${productName}`}</span>
        </div>

        {groupedProducts[productName].map((product) =>
          product.items.map((item) => (
            <div key={item.id} className="ordered-option">
              <div className="optionNamegroup">
                <span className="option-name">{`[옵션] ${item.optionName}`}</span>
                <span className="product-quantity">
                  {comma(item.quantity)}개
                </span>
              </div>

              <div className="option-price">
                <span>{comma(item.price)}원</span>
              </div>
            </div>
          ))
        )}
      </div>
    ));
  };

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
            <button className="next-button2" onClick={() => navigate("/")}>
              쇼핑 계속하기
            </button>
          </div>
        </div>

        <div className="complete-info" id="complete-deliveryinfo">
          <div className="complete-info-tit">
            <span>배송지 정보</span>
          </div>
          <div className="complete-info-content"></div>
        </div>

        <div className="complete-info" id="complete-productinfo">
          <div className="complete-info-tit">
            <span>주문상품 정보</span>
          </div>
          <div className="complete-info-content">
            <div className="complete-product-list">
              <OrderedItems />
              <div className="ordered-price">
                <div className="label">총 결제금액</div>
                <span>{comma(totalPrice)}원(카카오페이머니)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleteTemplate;
