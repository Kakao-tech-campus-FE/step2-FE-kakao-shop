import styled from '@emotion/styled';
import { Fragment, PropsWithChildren, ChangeEvent } from 'react';

import Radio from '@components/@base/Radio';
import CheckBoxItem from '@components/@molecules/CheckBoxItem';

const Pay = ({ children }: PropsWithChildren) => {
  return <Fragment>{children}</Fragment>;
};

Pay.Agree = function () {
  return (
    <Agree.Root>
      <Agree.Header>
        <CheckBoxItem.Big>전체 동의하기</CheckBoxItem.Big>
      </Agree.Header>

      <Agree.Body>
        <CheckBoxItem>카카오페이 결제조건 및 개인정보 제3자 제공 동의</CheckBoxItem>
        <CheckBoxItem>개인정보 제3자 제공 동의</CheckBoxItem>
      </Agree.Body>

      <Agree.Footer>
        <Agree.Terms>법적 고지</Agree.Terms>
        <Agree.TermsText>
          (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다. 개별 판매자가 판매하는
          상품에 대해 (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과
          관련한 의무와 책임은 각 판매자에게 있습니다.
        </Agree.TermsText>
      </Agree.Footer>
    </Agree.Root>
  );
};

Pay.Method = function ({ payMethodData, state, onChange }: PayMethod) {
  return (
    <Method.Root>
      <Method.Header>
        <Method.Logo></Method.Logo>
      </Method.Header>

      <Method.PaymentTypeList>
        {payMethodData.map(item => (
          <li key={item.name}>
            <Radio.Big name={item.name} value={item.value} onChange={onChange} checked={item.value === state}>
              {item.name}
            </Radio.Big>
            {item.info !== '' && <Radio.Info>{item.info}</Radio.Info>}
          </li>
        ))}
      </Method.PaymentTypeList>
    </Method.Root>
  );
};

Pay.CashReceipt = function ({ payCashReceiptData, state, onChange }: PayCashReceipt) {
  return (
    <CashReceipt.Root>
      {payCashReceiptData.map(item => (
        <li key={item.name}>
          <Radio.Regular name={item.name} value={item.value} onChange={onChange} checked={item.value === state}>
            {item.name}
          </Radio.Regular>
        </li>
      ))}
    </CashReceipt.Root>
  );
};

export default Pay;

type PayMethodData = {
  name: string;
  value: string;
  info: string;
};

type PayMethod = {
  payMethodData: PayMethodData[];
  state: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type PayCashReceiptData = Omit<PayMethodData, 'info'>;

type PayCashReceipt = {
  payCashReceiptData: PayCashReceiptData[];
} & Omit<PayMethod, 'payMethodData'>;

const Agree = {
  Root: styled.div`
    background-color: #fff;

    &::before {
      content: '';

      display: block;

      height: 12px;

      box-sizing: border-box;

      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      background-color: #f2f3f5;
    }
  `,
  Header: styled.div`
    padding: 19px 16px;

    border-bottom: 1px solid #ebebeb;
  `,
  Body: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 16px;

    color: #111;
  `,
  Footer: styled.div`
    padding: 16px;

    background: #fafafa;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  `,
  Terms: styled.div`
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #222;
  `,
  TermsText: styled.div`
    padding-top: 6px;

    font-size: 13px;
    line-height: 20px;
    color: #666;
  `,
};

const Method = {
  Root: styled.div`
    background-color: #ffeb00;
  `,
  Header: styled.div`
    position: relative;

    height: 60px;
  `,
  Logo: styled.span`
    position: absolute;
    top: 20px;
    left: 15px;

    overflow: hidden;

    width: 52px;
    height: 16px;

    background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/pay_icon_200401.4e2af07d62fbb994.png')
      no-repeat;
    background-size: 210px 50px;
    background-position: 0 0;

    font-size: 1px;
    line-height: 0;
    color: transparent;
    vertical-align: top;
  `,
  PaymentTypeList: styled.ul`
    padding: 0 15px 15px 15px;

    background-color: #ffeb00;

    & > li {
      position: relative;

      padding: 13px 0 15px;
    }

    & > li:first-of-type {
      padding-top: 0px;
      padding-bottom: 7px;
    }
  `,
};

const CashReceipt = {
  Root: styled.div`
    display: flex;
    gap: 18px;

    padding: 15px 16px;
  `,
};
