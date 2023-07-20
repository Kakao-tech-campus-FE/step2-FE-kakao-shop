import React from 'react';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import CartItem from '../organisms/CartItem';
import { comma } from '../../utils/convert';

const CartTemplate = () => {
  const cartProducts = {
    products: [
      {
        id: 1,
        productName: '기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전',
        carts: [
          {
            id: 1,
            option: {
              id: 5,
              optionName: '2겹 식빵수세미 6매',
              price: 8900,
            },
            quantity: 3,
            price: 26700,
          },
        ],
      },
      {
        id: 3,
        productName: '삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!',
        carts: [
          {
            id: 2,
            option: {
              id: 10,
              optionName: 'JR310BT (무선 전용) - 레드',
              price: 49900,
            },
            quantity: 4,
            price: 199600,
          },
          {
            id: 3,
            option: {
              id: 11,
              optionName: 'JR310BT (무선 전용) - 그린',
              price: 49900,
            },
            quantity: 5,
            price: 249500,
          },
        ],
      },
    ],
    totalPrice: 475800,
  };

  return (
    <Container>
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
    </Container>
  );
};

export default CartTemplate;
