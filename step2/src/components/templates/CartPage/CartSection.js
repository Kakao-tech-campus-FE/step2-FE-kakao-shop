import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectedProduct from "../../organisms/CartPage/SelectedProduct";
import Button from "../../atoms/Button";
import { comma } from "../../../utils/convert";
import { getCart } from "../../../services/cart";
import { makeOrder } from "../../../services/order";
import { updateCart } from "../../../services/cart";

const CartSection = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [changedCarts, setChangedCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allSelected, setAllSelected] = useState(true);
  const [selectedProductIds, setSelectedProductIds] = useState(() => cartProducts.map(p => p.id));
  const navigate = useNavigate();

  const filterCartProducts = (products) => {
    return products.map((product) => {
      return {
        ...product,
        carts: product.carts.filter((cart) => cart.quantity > 0),
      };
    }).filter((product) => product.carts.length > 0);
  };
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const res = await getCart();
        const filteredProducts = filterCartProducts(res.data.response.products);
        setCartProducts(filteredProducts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const fetchChangedCarts = (cartInfo) => {
    const updatedCarts = [...changedCarts];
    const changedCartIndex = updatedCarts.findIndex((cart) => cart.cartId == cartInfo.cartId,);

    if (changedCartIndex !== -1) {
      updatedCarts[changedCartIndex] = {
        "cartId": cartInfo.cartId,
        "quantity": cartInfo.newQuantity
      }
      setChangedCarts(updatedCarts);
      return;
    }
    setChangedCarts([...changedCarts, { "cartId": cartInfo.cartId, "quantity": cartInfo.newQuantity }]);
  };

  const handleOptionUpdate = (productId, optionId, newQuantity) => {
    const updatedProducts = [...cartProducts];
    const productIndex = updatedProducts.findIndex((product) => product.id === productId);
    const optionIndex = updatedProducts[productIndex].carts.findIndex((opt) => opt.option.id === optionId);
  
    // 변경된 상품 (장바구니 수정용)
    fetchChangedCarts({ cartId: updatedProducts[productIndex]?.carts[optionIndex].id, newQuantity:newQuantity });

    if (newQuantity === 0) {
      updatedProducts[productIndex].carts.splice(optionIndex, 1);
    } else {
      updatedProducts[productIndex].carts[optionIndex].quantity = newQuantity;
    }
  
    // 현재 장바구니에 담긴 상품
    const filteredProducts = filterCartProducts(updatedProducts);
    setCartProducts(filteredProducts);

    // 체크된 상품 목록
    const newSelectedProductIds = filteredProducts.map((p) => p.id);
    setSelectedProductIds(newSelectedProductIds);

  };

  useEffect(() => {
    setSelectedProductIds(cartProducts.map(p => p.id));
  }, [cartProducts]);

  const handleAllSelectedToggle = () => {
    const newAllSelected = !allSelected;
    setAllSelected(newAllSelected);
    if (newAllSelected) {
      setSelectedProductIds(cartProducts.map(p => p.id));
    } else {
      setSelectedProductIds([]);
    }
  };

  const handleProductSelected = (productId, isSelected) => {
    setSelectedProductIds((prevSelectedProductIds) => {
      if (isSelected) {
        return [...prevSelectedProductIds, productId];
      } else {
        return prevSelectedProductIds.filter((id) => id !== productId);
      }
    });
  };

  const totalSelectedValue = cartProducts.reduce((acc, product) => {
    if (selectedProductIds.includes(product.id)) {
      return acc + product.carts.reduce((optAcc, option) => optAcc + (option.quantity * option.option.price), 0);
    }
    return acc;
  }, 0);

  const handleOrder = async () => {
    if (cartProducts.length === 0) {
      alert("장바구니에 담긴 상품이 없습니다.");
      return;
    }

    try {
      setLoading(true);
      const res = await makeOrder();
      console.log("res:", res);
      if (res.status === 200) {
        alert("주문 완료하였습니다.");
        navigate("/");
      } else {
        alert("주문실패");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    
  };

  const handleUpdateCart = async () => {
    try {
      const res = await updateCart(changedCarts);
      if (res.status === 200) {
        alert("장바구니가 수정되었습니다.");
        navigate("/cart");
      } else {
        alert("장바구니 수정 실패");
      }
    } catch (err) {
      alert("장바구니 수정 실패");
    }
  };

  return (
    <div className="cart-panel">
      <div className="cart-title">장바구니</div>
      <div className="check-all">
        <label>
          <input type="checkbox" checked={allSelected} onChange={handleAllSelectedToggle} />
            전체 선택
        </label>
      </div>
      {cartProducts.map((product) => (
        <SelectedProduct
          key={product.id}
          productId={product.id}
          productName={product.productName}
          selectedOptions={product.carts}
          onOptionUpdate={(optionId, newQuantity) => handleOptionUpdate(product.id, optionId, newQuantity)}
          onProductSelected={handleProductSelected}
          initialSelected={selectedProductIds.includes(product.id)}
        />
      ))}
      <div>주문 예상 가격: {comma(totalSelectedValue)}원</div>
      <Button className="primary" onClick={handleOrder}>{selectedProductIds.length}건 주문하기</Button>
      <Button onClick={handleUpdateCart}>장바구니 수정하기</Button>
    </div>
  );
};

export default CartSection;
