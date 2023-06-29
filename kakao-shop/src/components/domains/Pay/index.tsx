import styled from "@emotion/styled";
import { Fragment, PropsWithChildren } from "react";
import CheckBoxItem from "../../@molecules/CheckBoxItem";

const Pay = ({ children }: PropsWithChildren) => {
  return <Fragment>{children}</Fragment>;
};

Pay.Agree = function () {
  return (
    <S.Root>
      <S.Header>
        <CheckBoxItem.Big>전체 동의하기</CheckBoxItem.Big>
      </S.Header>

      <S.Body>
        <CheckBoxItem>
          카카오페이 결제조건 및 개인정보 제3자 제공 동의
        </CheckBoxItem>
        <CheckBoxItem>개인정보 제3자 제공 동의</CheckBoxItem>
      </S.Body>

      <S.Footer>
        <S.Terms>법적 고지</S.Terms>
        <S.TermsText>
          (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
          포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
          통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및
          환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </S.TermsText>
      </S.Footer>
    </S.Root>
  );
};

export default Pay;

const S = {
  Root: styled.div`
    background-color: #fff;

    &::before {
      display: block;
      height: 12px;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      background-color: #f2f3f5;
      box-sizing: border-box;
      content: "";
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
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    background: #fafafa;
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
