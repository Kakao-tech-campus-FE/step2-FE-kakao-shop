import { queryCart } from '@api/cartApi';
import { CartProductData, CartedOptionData, ProductOptionData } from '@api/dto';
import { order } from '@api/orderApi';
import Card from '@components/atoms/Card';
import InnerFlatCard from '@components/atoms/InnerFlatCard';
import PriceTag from '@components/atoms/PriceTag';
import Title from '@components/atoms/Title';
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
    <Card>
      <div className="p-10">
        <h2 className="text-xl font-bold">배송지 정보</h2>
        <h2 className="text-xl font-bold">주문상품 정보</h2>
        <hr />
        {products &&
          products.map((item: CartProductData) => {
            return (
              <div className="mt-5">
                <span>{item.productName}</span>
                <InnerFlatCard key={item.id}>
                  {item.carts.map((cart: CartedOptionData) => {
                    return (
                      <div className="grid grid-cols-3 items mb-5  items-center">
                        <div>{cart.option.optionName}</div>
                        <div className="text-center">{comma(cart.quantity)}개</div>
                        <div className="text-[12px] text-right">
                          <PriceTag>{cart.price}원</PriceTag>
                        </div>
                      </div>
                    );
                  })}
                </InnerFlatCard>
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
    </Card>
  );
};

export default OrderTemplate;
