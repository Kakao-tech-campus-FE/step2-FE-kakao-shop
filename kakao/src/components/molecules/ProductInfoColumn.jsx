import React from "react";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductInfoColumn.css";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductInfoColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-info-column">
      <div className="col">
        <Photo src={image} alt={productName} className="product-info-img" />
      </div>
      <div className="col">
        <div className="stars">
          <img src={staticServerUrl + "/star.png"} alt="별점" />
        </div>
        <p className="name">{productName}</p>
        <div className="product-info-coupon">
          <span>고객님을 위한 혜택</span>
          <button>쿠폰받기</button>
        </div>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInfoColumn;
