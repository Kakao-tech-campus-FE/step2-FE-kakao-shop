import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PurchaseSelect from "../../organisms/ProductDetailPage/PurchaseSelect";
import PurchaseConfirm from "../../organisms/ProductDetailPage/PurchaseConfirm";
import { addCart } from "../../../services/cart";

const staticServerUri = process.env.REACT_APP_PATH || "";

const PurchaseSection = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleSelectOption = (option) => {
    const isSelected = selectedOptions.find((opt) => opt.id === option.id);
    if (!isSelected) {
      const newSelected = [...selectedOptions, { ...option, quantity: 1 }];
      setSelectedOptions(newSelected);
    }
  };

  const updateQuantity = (id, quantity) => {
    const updatedOptions = selectedOptions.map((option) =>
      option.id === id ? { ...option, quantity } : option
    );
    setSelectedOptions(updatedOptions);
  };

  const removeOption = (id) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectedOptions(updatedOptions);
  };

  const getTotalQuantity = () => {
    return selectedOptions.reduce((sum, option) => sum + option.quantity, 0);
  };

  const getTotalPrice = () => {
    return selectedOptions.reduce(
      (sum, option) => sum + option.price * option.quantity,
      0
    );
  };

  const getCart = () => {
    const cart = selectedOptions.map((option) => {
      return {
        optionId: option.id,
        quantity: option.quantity,
      };
    });
    return cart;
  };

  const onAddCart = async () => {
    if (selectedOptions.length < 1) {
      alert("옵션을 선택하세요.");
      return;
    }

    try {
      await addCart(getCart());
      alert("장바구니에 담겼습니다.");
      setSelectedOptions([]);
    } catch (error) {
      console.log("error:", error);
      alert("장바구니 추가 중 오류가 발생했습니다.");
    }
  };

  const onPurchaseProduct = async () => {
    if (selectedOptions.length < 1) {
      alert("옵션을 선택하세요.");
      return;
    }

    try {
      await addCart(getCart());
      setSelectedOptions([]);
      navigate(staticServerUri + "/cart");
    } catch (error) {
      console.log("error:", error);
      alert("장바구니 추가 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="purchase-section">
      <PurchaseSelect
        options={options}
        onSelectOption={handleSelectOption}
        selectedOptions={selectedOptions}
        onQuantityChange={updateQuantity}
        onRemove={removeOption}
      />
      <PurchaseConfirm
        getTotalQuantity={getTotalQuantity}
        getTotalPrice={getTotalPrice}
        handleAddCart={onAddCart}
        handlePurchase={onPurchaseProduct}
      />
    </div>
  );
};

export default PurchaseSection;
