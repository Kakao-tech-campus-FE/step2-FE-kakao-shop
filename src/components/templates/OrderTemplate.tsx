import { queryCart } from '@api/cartApi';
import { CartProductData } from '@api/dto';
import { order } from '@api/orderApi';
import comma from '@utils/commaUtils';
import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const OrderTemplate = () => {
  const { data, error, isLoading } = useQuery('cart', queryCart);
  const { products, totalPrice } = data?.data?.response ?? { products: undefined, totalPriace: undefined };
  const { mutate: orderProduct } = useMutation({
    mutationFn: () => order(),
  });
  const navigate = useNavigate();

  return (
    <div>
      <h1>주문하기</h1>
      <h2>배송지 정보</h2>
      <h2>주문상품 정보</h2>
      {products &&
        products.map((item: CartProductData, index: number) => {
          return (
            <div key={item.id}>
              <div>
                <span>{item.productName}</span>
                <span>{item.carts[index].option.optionName}</span>
              </div>
              <div>
                <span>{comma(item.carts[index].quantity)}개</span>
              </div>
              <div>
                <span>{comma(item.carts[index].price)}원</span>
              </div>
            </div>
          );
        })}
      <div>
        <h3>총 주문 금액</h3>
        <span>{comma(totalPrice)}</span>
      </div>
      {/* 전체 동의, 구매조건 확인 및 결제 진행 동의  */}
      <button
        type="button"
        onClick={() => {
          orderProduct(products, {
            // 임시
            onError: () => {
              alert('주문에 실패했습니다.');
            },
            onSuccess: () => {
              alert('주문을 완료했습니다.');
              navigate(`/orders/complete/`);
            },
          });
        }}
      >
        주문
      </button>
    </div>
  );
};

export default OrderTemplate;
