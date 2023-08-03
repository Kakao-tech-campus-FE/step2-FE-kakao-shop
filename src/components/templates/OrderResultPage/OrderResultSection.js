import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { comma } from "../../../utils/convert";
import { getOrder } from "../../../services/order";
import OrderedProduct from "../../organisms/OrderResultPage/OrderedProduct";

const OrderResultSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        const res = await getOrder(location.pathname.split("/")[2]);
        setProducts(res.data.response.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const totalSelectedValue = products.reduce((acc, product) => {
    return (
      acc + product.items.reduce((optAcc, option) => optAcc + option.price, 0)
    );
  }, 0);

  return (
    <div className="order-panel">
      <div className="order-title">주문완료</div>
      {products.map((product) => (
        <OrderedProduct key={product.id} product={product} />
      ))}
      <div>결제 가격: {comma(totalSelectedValue)}원</div>
    </div>
  );
};

export default OrderResultSection;
