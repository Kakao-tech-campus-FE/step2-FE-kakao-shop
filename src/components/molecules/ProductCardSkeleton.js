import React from "react";
import "../../style/molecules/ProductCardSkeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="product_card_skeleton">
      <div className="skeleton_thumbnail"></div>
      <div className="skeleton_name"></div>
      <div className="skeleton_price"></div>
    </div>
  );
};

export default ProductCardSkeleton;
