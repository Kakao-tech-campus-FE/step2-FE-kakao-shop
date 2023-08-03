import { useMutation } from 'react-query';
import { comma } from '../../utils/convert';
import { order } from '../../apis/order';
import OrderList from '../molecules/OrderList';
import { useState } from 'react';
import * as Order from '../../styles/templates/OrderTemplate';
import { useNavigate } from 'react-router-dom';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const OrderTemplate = ({ data }) => {
  const navigate = useNavigate();
  const { products, totalPrice } = data?.data?.response;
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleAllAgree = (e) => {
    const checked = e.target.checked;

    setAgreePayment(checked);
    setAgreePolicy(checked);
  };

  const handleAgreement = (e) => {
    const { name, checked } = e.target;

    if (name === 'payment-agree') {
      setAgreePayment(checked);
    } else if (name === 'policy-agree') {
      setAgreePolicy(checked);
    }
  };

  const { mutate: mutateOrder } = useMutation({
    mutationFn: order,
  });
  return (
    <Order.Container>
      <Order.Box>
        <div>
          <Order.Title>주문하기</Order.Title>
        </div>
        <div>
          <Order.DeliveryInfoTitle>배송지 정보</Order.DeliveryInfoTitle>
          <Order.DeliveryContainer>
            <Order.DeliveryInfoName>
              <span>황수연</span>
              <Order.DeliveryDefalt>기본배송지</Order.DeliveryDefalt>
            </Order.DeliveryInfoName>
            <div>010-9690-8798</div>
            <div>광주광역시 사암로340번길 30</div>
          </Order.DeliveryContainer>
          <div>
            <Order.ProductInfo>주문상품정보</Order.ProductInfo>
            <OrderList products={products} />
          </div>
        </div>
        <Order.TotalPriceContainer>
          <span>총 주문 금액</span>
          <span className="price">{comma(totalPrice)}원</span>
        </Order.TotalPriceContainer>
        <Order.CheckBoxContainer>
          <Order.TotalAgree>
            <input
              type="checkbox"
              id="all-agree"
              checked={agreePayment && agreePolicy}
              onChange={handleAllAgree}
            />
            <label htmlFor="all-agree">전체 동의</label>
          </Order.TotalAgree>
          <Order.Checkbox>
            <div>
              <input
                type="checkbox"
                id="agree"
                name="payment-agree"
                checked={agreePayment}
                onChange={handleAgreement}
              />
              <label htmlFor="agree">구매조건 확인 및 결제 진행 동의</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="policy"
                name="policy-agree"
                checked={agreePolicy}
                onChange={handleAgreement}
              />
              <label htmlFor="policy">개인정보 제3자 제공 동의</label>
            </div>
          </Order.Checkbox>
          <div>
            <Order.PolicyTitle>법적고지</Order.PolicyTitle>
            <Order.PolicyText>
              {'('}주{')'}카카오에서는 판매하는 상품 중에는 개별 판매자가
              판매하는 상품이 포함되어 있습니다. 개별 판매자가 판매하는 상품에
              대해 {'('}주{')'}카카오는 통신중게 판매업자로서 통신판매의
              당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와
              책임은 각 판매자에게 있습니다.
            </Order.PolicyText>
          </div>
        </Order.CheckBoxContainer>
        <Order.Button
          disabled={!agreePayment || !agreePolicy || !totalPrice}
          onClick={() => {
            // POST: /orders/save
            // 장바구니에 있는 모든 항목이 결제로 저장
            mutateOrder(null, {
              onError: () => {
                alert('주문에 실패했습니다.');
              },
              onSuccess: (res) => {
                const id = res.data.response.id;
                navigate(staticServerUrl + `/order/complete/${id}`);
              },
            });
          }}
        >
          결제하기
        </Order.Button>
      </Order.Box>
    </Order.Container>
  );
};

export default OrderTemplate;
