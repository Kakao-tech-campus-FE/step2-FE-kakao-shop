import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import CartItem from '../organisms/CartItem';
import { comma, staticUrl } from '../../utils/convert';
import { useGetCartQuery, useUpdateCartMutation } from '../../apis/productApi';
import { UpdateCart } from '../../dto/productDto';

const CartTemplate = () => {
  const { data: cartProducts } = useGetCartQuery();
  const { mutate: updateCart } = useUpdateCartMutation();
  const navigate = useNavigate();

  const [updatedCartOptions, setUpdatedCartOptions] = useState<UpdateCart[]>([]);

  const handleOrderClick = () => {
    updateCart(updatedCartOptions);
    navigate(staticUrl('/order'));
  };

  return (
    <div>
      <div className='border-y bg-white p-4'>
        <h1 className='text-center text-sm font-bold'>장바구니</h1>
      </div>
      {cartProducts && (
        <>
          {cartProducts.products.map((product) => (
            <CartItem
              updatedCartOptions={updatedCartOptions}
              setUpdatedCartOptions={setUpdatedCartOptions}
              key={product.id}
              product={product}
            />
          ))}
          <div className='flex items-center justify-between bg-white p-4'>
            <strong className='text-lg'>주문 예상금액</strong>
            <p className='font-semibold text-blue-500'>{comma(cartProducts.totalPrice)}원</p>
          </div>
          <Button onClick={handleOrderClick}>{cartProducts.products.length}건 주문하기</Button>
        </>
      )}
    </div>
  );
};

export default CartTemplate;
