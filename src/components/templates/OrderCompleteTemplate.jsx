import React from "react";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import "../../styles/template/OrderCompleteTemplate.css";
const staticServerUrl = process.env.REACT_APP_PATH || "";

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
          <span className="material-symbols-outlined" id="shop-icon">
            storefront
          </span>
          <span className="product-name">{`${productName}`}</span>
        </div>

        {groupedProducts[productName].map((product) =>
          product.items.map((item) => (
            <div key={item.id} className="ordered-option-item">
              <div className="optionNamegroup">
                <span className="option-name">{`[옵션] ${item.optionName}`}</span>
                <span className="option-quantity">
                  주문수량: {comma(item.quantity)}개
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
            <img
              src={staticServerUrl + "/춘식이.png"}
              alt="주문완료!춘식이"
              width={65}
            />
            <span className="message1">구매완료!</span>
            <span className="message2">구매가 정상적으로 완료되었습니다.</span>
          </div>
          <div className="complete-next-buttons">
            <button className="button1">전체 주문 내역</button>
            <button className="button2" onClick={() => navigate("/")}>
              쇼핑 계속하기
            </button>
          </div>
          <div className="add-kakao">
            <span>
              카카오톡 쇼핑하기 <br />
              <strong>지금 친구 추가하면 500포인트 적립!</strong>
            </span>
            <img
              src={staticServerUrl + "/add-kakao.png"}
              alt="카카오 친구추가"
              style={{ width: "45px", borderRadius: "5px" }}
            />
          </div>
        </div>

        <div className="complete-info" id="complete-delivery-info">
          <div className="complete-info-tit">
            <span>배송지 정보</span>
          </div>
          <div className="complete-info-content">
            <div className="complete-delivery-consumer">
              <strong className="name">춘식이</strong>
              <span className="number">010-1234-5678</span>
              <p className="address">
                (12345)판교 카카오로 가는길 1(쿠키즈동, 춘식팰리스) 101-111
              </p>
            </div>
            <div className="delivery-update-btn">
              <button>요청사항 수정</button>
              <button>배송지 수정</button>
            </div>
          </div>
        </div>

        <div className="complete-info" id="complete-product-info">
          <div className="complete-info-tit">
            <span>주문상품 정보</span>
          </div>
          <div className="complete-info-content">
            <div className="complete-product-list">
              <OrderedItems />
            </div>
          </div>
        </div>

        <div className="complete-info" id="complete-delivery-info">
          <div className="ordered-price-info">
            <span className="ordered-price-tit">총 결제금액</span>
            <span className="ordered-total-price">
              {comma(totalPrice)}원(카카오페이머니)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleteTemplate;
