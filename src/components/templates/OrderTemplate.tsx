import { queryCart } from '@api/cartApi';
import { CartProductData, CartedOptionData } from '@api/dto';
import { order } from '@api/orderApi';
import Card from '@components/atoms/Card';
import InnerFlatCard from '@components/atoms/InnerFlatCard';
import Checkbox from '@components/atoms/Checkbox';
import comma from '@utils/commaUtils';
import React, { useState, useRef } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import FilledButton from '@components/atoms/button/FilledButton';
import OrderedOption from '@components/atoms/OrderedOption';

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
              return <OrderedOption optionName={cart.option.optionName} quantity={cart.quantity} price={cart.price} />;
            })}
          </InnerFlatCard>
        </div>,
      );
    });
    return renderComponent;
  };

  return (
    <Card>
      <div className="space-y-5">
        <h2 className="text-xl font-bold">배송지 정보</h2>
        <hr />
        <InnerFlatCard>
          <div className="grid grid-cols-6 ">
            <div className="grid grid-rows-3 font-bold col-span-1 space-y-2 items-center">
              <span>이름</span>
              <span>연락처</span>
              <span>배송주소</span>
            </div>
            <div className="grid grid-rows-3 col-span-5 space-y-2 items-center">
              <span>임연후</span>
              <span>010-7777-8888</span>
              <span>경기도 성남시 분당구 판교역로 166 (우)13529</span>
            </div>
          </div>
        </InnerFlatCard>
        <h2 className="text-xl font-bold">주문상품 정보</h2>
        <hr />
        {orderItems()}
        <div className="flex justify-between font-bold text-xl pt-5">
          <h3>총 주문 금액</h3>
          <span className="text-subOrange pr-3">{comma(totalPrice)}원</span>
        </div>
        <div className="flex flex-col gap-2">
          {/* 전체 동의, 구매조건 확인 및 결제 진행 동의  */}
          <Checkbox id="all-agree" ref={allAgreeRef} checked={allAgree} onChange={handleAllAgree}>
            이용 약관, 개인정보 제 3자 제공에 모두 동의합니다.
          </Checkbox>
          <Checkbox
            id="agree-payment"
            ref={agreePaymentRef}
            name="agreePayment"
            required
            checked={agreement.agreePayment}
            onChange={handleAgreement}
          >
            이용약관 확인 및 결제 진행 동의
          </Checkbox>
          <Checkbox
            id="information-provision"
            ref={agreePolicyRef}
            name="agreePolicy"
            required
            checked={agreement.agreePolicy}
            onChange={handleAgreement}
          >
            개인정보 제 3자 제공 동의
          </Checkbox>
        </div>
        {/* 구매 버튼 */}
        <div className="flex flex-col w-[30%] mx-auto mt-5">
          <FilledButton
            disabled={!allAgree}
            onClick={() => {
              orderProduct(products, {
                // 임시
                onError: () => {
                  alert('주문에 실패했습니다.');
                },
                onSuccess: (res) => {
                  const { id } = res.data.response;
                  alert('주문을 완료했습니다.');
                  navigate(`/order/complete/${id}`);
                },
              });
            }}
          >
            주문
          </FilledButton>
        </div>
      </div>
    </Card>
  );
};

export default OrderTemplate;
