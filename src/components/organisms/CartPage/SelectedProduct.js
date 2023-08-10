import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SelectedOption from "../../atoms/ProductDetailPage/SelectedOption";
import TotalPrice from "../../molecules/CartPage/TotalPrice";

const SelectedProduct = ({
  productId,
  productName,
  selectedOptions,
  onOptionUpdate,
  onProductSelected,
  initialSelected=true,
}) => {
  const [isChecked, setIsChecked] = useState(initialSelected);
  const location = useLocation();

  useEffect(() => {
    setIsChecked(initialSelected);
  }, [initialSelected]);

  const handleQuantityChange = (optionId, newQuantity) => {
    onOptionUpdate(optionId, newQuantity);
  };

  const handleRemoveOption = (optionId) => {
    onOptionUpdate(optionId, 0);
  };

  const handleToggleCheck = () => {
    if (onProductSelected) {
      const newIsChecked = !isChecked;
      setIsChecked(newIsChecked);
      onProductSelected(productId, newIsChecked);
    }
  };

  const totalPrice = selectedOptions.reduce(
    (acc, option) => acc + option.option.price * option.quantity,
    0
  );

  const totalQuantity = selectedOptions.reduce(
    (acc, option) => acc + option.quantity,
    0
  );

  return (
    <div className="selected-product">
      {location.pathname === "/order" && (
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleCheck}
        />
      )}
      <div className="product-info">
        <span>{productName}</span>
        {selectedOptions.map((option) => (
          <SelectedOption
            key={option.id}
            option={option.option}
            quantity={option.quantity}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveOption}
          />
        ))}
        <TotalPrice
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
          immediateDiscount={0}
          talkDealDiscount={0}
        />
      </div>
    </div>
  );
};

export default SelectedProduct;
