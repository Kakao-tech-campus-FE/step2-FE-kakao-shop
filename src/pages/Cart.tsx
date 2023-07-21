import React from 'react';
import { useQuery } from 'react-query';
import { getCart } from '../api/Products';
import ProductCard from '../components/Cart/organisms/ProductCard';
import TotalPrice from '../components/Cart/atoms/TotalPrice';
import OrderBtn from '../components/Cart/atoms/OrderBtn';

function Cart() {
  const { data } = useQuery(['getCartData'], () => getCart(), {
    suspense: true,
  });
  if (!data) return null;
  return (
    <div className="border border-gray-200 bg-gray-100 max-w-3xl m-auto mt-8">
      <h2 className="text-center bg-white p-5">장바구니</h2>
      {data.response.products.map((product) => (
        <ProductCard key={product.id} name={product.productName} carts={product.carts} />
      ))}
      <TotalPrice totalPrice={data.response.totalPrice} />
      <OrderBtn />
    </div>
  );
}

export default Cart;
