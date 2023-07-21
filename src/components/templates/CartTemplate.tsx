import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import CartItem from '../organisms/CartItem';
import { comma } from '../../utils/convert';
import { useGetCartQuery, useUpdateCartMutation } from '../../apis/productApi';
import { UpdateCart } from '../../dto/productDto';

const CartTemplate = () => {
  const { data: cartProducts } = useGetCartQuery();
  const { mutate: updateCart } = useUpdateCartMutation();
  const navigate = useNavigate();

  const [updatedCartOptions, setUpdatedCartOptions] = useState<UpdateCart[]>([]);

  const handleOrderClick = () => {
    updateCart(updatedCartOptions);
    navigate('/order');
  };

  return (
    <Container>
      {cartProducts && (
        <>
          {cartProducts.products.map((product) => (
            <CartItem setUpdatedCartOptions={setUpdatedCartOptions} key={product.id} product={product} />
          ))}
          <div className='flex items-center justify-between p-4'>
            <strong className='text-lg'>주문 예상금액</strong>
            <p>{comma(cartProducts.totalPrice)}원</p>
          </div>
          <Button onClick={handleOrderClick}>{cartProducts.products.length}건 주문하기</Button>
        </>
      )}
    </Container>
  );
};

export default CartTemplate;
