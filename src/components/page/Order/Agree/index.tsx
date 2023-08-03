import styled from '@emotion/styled';
import type { ChangeEvent, ChangeEventHandler } from 'react';

import { CheckboxData } from '@pages/Order';

import { CheckBox } from '@components/atom';

type Props = {
  isAllChecked: boolean;
  checkedListById: string[];
  setCheckedListById: React.Dispatch<React.SetStateAction<string[]>>;
  CHECKBOX_DATA: CheckboxData[];
};

const Agree = ({ isAllChecked, checkedListById, setCheckedListById, CHECKBOX_DATA }: Props) => {
  return (
    <S.Root>
      <S.Header>
        <CheckBox
          data-testid={'order-allChecked'}
          onChange={(e: ChangeEvent) => toggleAllCheckedById(e)}
          checked={isAllChecked}>
          <S.CheckboxBigText>전체 동의하기</S.CheckboxBigText>
        </CheckBox>
      </S.Header>

      <S.Body>
        {CHECKBOX_DATA.map(item => (
          <CheckBox
            key={item.name}
            onChange={handleOnChange(item.name)}
            checked={checkedListById.includes(item.name)}
            data-testid={item['data-testid']}>
            <S.CheckboxText>{item.name}</S.CheckboxText>
          </CheckBox>
        ))}
      </S.Body>

      <S.Footer>
        <S.Terms>법적 고지</S.Terms>
        <S.TermsText>
          (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다. 개별 판매자가 판매하는
          상품에 대해 (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과
          관련한 의무와 책임은 각 판매자에게 있습니다.
        </S.TermsText>
      </S.Footer>
    </S.Root>
  );

  function handleOnChange(id: string): ChangeEventHandler<HTMLInputElement> {
    return function () {
      const isChecked = checkedListById.includes(id);

      if (isChecked) {
        setCheckedListById(prev => prev.filter(el => el !== id));
      } else {
        setCheckedListById(prev => [...prev, id]);
      }
    };
  }

  function toggleAllCheckedById(event: ChangeEvent) {
    const { checked } = event.target as HTMLInputElement;

    if (checked) {
      setCheckedListById(CHECKBOX_DATA.map(item => item.name));
    } else {
      setCheckedListById([]);
    }
  }
};

export default Agree;

const S = {
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

  CheckboxText: styled.span`
    padding-left: 28px;

    font-size: 14px;
    line-height: 22px;
    color: #222;
    letter-spacing: -0.06em;
  `,

  CheckboxBigText: styled.span`
    padding-left: 28px;

    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #222;
    letter-spacing: -0.06em;
  `,
};
