import styled from '@emotion/styled';
import { ReactNode, useState } from 'react';
import { ChangeEvent } from 'react';

import { Toast, Toggle } from '../../components/@base';
import BannerImageList from '../../components/@base/Carousel/BannerImageList';
import BannerImageListItem from '../../components/@base/Carousel/BannerImageListItem';
import Checkbox from '../../components/@base/CheckBox';
import Radio from '../../components/@base/Radio';
import CheckBoxItem from '../../components/@molecules/CheckBoxItem';
import Pay from '../../components/domains/Pay';

function App() {
  const [value, setValue] = useState('1');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSomething = () => {
    console.log('something');
  };

  const payMethodData = [
    {
      name: '카카오페이머니',
      value: '1',
      info: '현금과 동일하게게 소득공제 가능',
    },
    {
      name: '카카오페이카드',
      value: '2',
      info: '',
    },
  ];

  const payCashReceiptData = [
    {
      name: '현금영수증 발급신청',
      value: '1',
    },
    {
      name: '발급안함',
      value: '2',
    },
  ];

  return (
    <div>
      <TopBannerBlock>
        <BannerImageList></BannerImageList>
      </TopBannerBlock>
      <Pay.Method payMethodData={payMethodData} state={value} onChange={onChangeHandler} />

      <Pay.CashReceipt payCashReceiptData={payCashReceiptData} state={value} onChange={onChangeHandler} />

      <Pay.Agree />

      <Toggle name="토글" onChange={() => {}}></Toggle>
      <S.Button
        onClick={() => {
          // 1. ReactElement를 넘길 수도 있고,
          Toast.show(<ToastContent onClick={handleSomething}>옵션을 먼저 선택해주세요.</ToastContent>);
        }}>
        open modal
      </S.Button>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
    </div>
  );
}

export default App;

const ToastContent = (props: { onClick: () => void; options?: any; children?: ReactNode }) => {
  return (
    <>
      {props.children}
      {/* <S.Button onClick={props.onClick}>something</S.Button> */}
    </>
  );
};

const S = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #2080fd;
    height: 40px;
    padding: 18px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.85;
    }
    &:disabled {
      cursor: not-allowed;
      filter: contrast(0.8);
    }
    transition: 0.2s opacity;
  `,
};

const BigText = styled.div`
  font-size: 30px;
`;

const TopBannerBlock = styled.div`
  width: 100%;
  overflow: hidden;
`;
