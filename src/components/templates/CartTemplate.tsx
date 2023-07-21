import React from 'react';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import CartItem from '../organisms/CartItem';
import { comma } from '../../utils/convert';
import { useGetCartQuery } from '../../apis/productApi';

const CartTemplate = () => {
  const { data: cartProducts } = useGetCartQuery();

  return (
    <Container>
      {cartProducts && (
        <>
          {cartProducts.products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className='flex items-center justify-between p-4'>
            <strong className='text-lg'>주문 예상금액</strong>
            <p>{comma(cartProducts.totalPrice)}원</p>
          </div>
          <Button
            onClick={() => {
              // TODO
            }}
          >
            {cartProducts.products.length}건 주문하기
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartTemplate;
