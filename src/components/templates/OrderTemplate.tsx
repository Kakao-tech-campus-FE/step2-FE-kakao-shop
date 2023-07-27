import { queryCart } from '@api/cartApi';
import { CartProductData, CartedOptionData } from '@api/dto';
import { order } from '@api/orderApi';
import Card from '@components/atoms/Card';
import InnerFlatCard from '@components/atoms/InnerFlatCard';
import PriceTag from '@components/atoms/PriceTag';
import Checkbox from '@components/atoms/Checkbox';
import comma from '@utils/commaUtils';
import React, { useState, useRef } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import FilledButton from '@components/atoms/button/FilledButton';

const OrderTemplate = () => {
  const { data, error, isLoading } = useQuery('cart', queryCart);

  const [allAgree, setAllAgree] = useState(false);
  const [agreement, setAgreement] = useState<{ [key: string]: boolean }>({ agreePayment: false, agreePolicy: false });

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  const { products, totalPrice } = data?.data?.response ?? { products: undefined, totalPriace: undefined };
  const { mutate: orderProduct } = useMutation({
    mutationFn: () => order(),
  });
  const navigate = useNavigate();

  const handleAllAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.checked;
    setAllAgree(value);
    Object.keys(agreement).forEach((key) => {
      agreement[key] = value;
    });
  };

  const handleAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === 'agreePayment') {
      setAgreement({ ...agreement, agreePayment: checked });
    } else if (name === 'agreePolicy') {
      setAgreement({ ...agreement, agreePolicy: checked });
    }
    if (!checked) setAllAgree(false);
    setAllAgree(Object.values({ ...agreement, [name]: checked }).every((value) => value === true));
  };

  const orderItems = () => {
    const renderComponent: React.ReactNode[] = [];
    products?.forEach((item: CartProductData) => {
      renderComponent.push(
        <div className="mt-5">
          <span>{item.productName}</span>
          <InnerFlatCard>
            {item.carts.map((cart: CartedOptionData) => {
              return (
                <div key={cart.id} className="grid grid-cols-3 items mb-5  items-center">
                  <div>{cart.option.optionName}</div>
                  <div className="text-center">{comma(cart.quantity)}개</div>
                  <div className="text-[12px] text-right">
                    <PriceTag>{cart.price}원</PriceTag>
                  </div>
                </div>
              );
            })}
          </InnerFlatCard>
        </div>,
      );
    });
    return renderComponent;
  };

  return (
    <Card>
      <div className="p-10">
        <h2 className="text-xl font-bold">배송지 정보</h2>
        <h2 className="text-xl font-bold">주문상품 정보</h2>
        <hr />
        {orderItems()}
        <div>
          <h3>총 주문 금액</h3>
          <span>{comma(totalPrice)}</span>
        </div>
        <div className="flex flex-col">
          {/* 전체 동의, 구매조건 확인 및 결제 진행 동의  */}
          <Checkbox id="all-agree" ref={allAgreeRef} checked={allAgree} onChange={handleAllAgree}>
            전체동의
          </Checkbox>
          <Checkbox
            id="agree-payment"
            ref={agreePaymentRef}
            name="agreePayment"
            checked={agreement.agreePayment}
            onChange={handleAgreement}
          >
            구매조건 확인 및 결제 진행 동의
          </Checkbox>
          <Checkbox
            id="information-provision "
            ref={agreePolicyRef}
            name="agreePolicy"
            checked={agreement.agreePolicy}
            onChange={handleAgreement}
          >
            개인정보 제 3자 제공 동의
          </Checkbox>
        </div>
        {/* 구매 버튼 */}
        <FilledButton
          disabled={!allAgree}
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
        </FilledButton>
      </div>
    </Card>
  );
};

export default OrderTemplate;
