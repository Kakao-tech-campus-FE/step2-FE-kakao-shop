import styled from '@emotion/styled';
import { ReactNode, useState, ChangeEvent, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Toast, Toggle } from '@components/@base';
import BannerImageList from '@components/@base/Carousel/BannerImageList';
import Pay from '@components/domains/Pay';

function TestPage() {
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
      <BigText>캐로셀</BigText>
      <TopBannerBlock>
        <BannerImageList />
      </TopBannerBlock>

      <BigText>Toast</BigText>
      <S.Button
        onClick={() => {
          // 1. ReactElement를 넘길 수도 있고,
          Toast.show(<ToastContent onClick={handleSomething}>옵션을 먼저 선택해주세요.</ToastContent>);
        }}>
        토스트 생성
      </S.Button>

      <BigText>라디오 버튼</BigText>
      <Pay.Method payMethodData={payMethodData} state={value} onChange={onChangeHandler} />
      <Pay.CashReceipt payCashReceiptData={payCashReceiptData} state={value} onChange={onChangeHandler} />

      <BigText>체크 리스트</BigText>
      <Pay.Agree />

      <BigText>토글</BigText>
      <Toggle name="토글" onChange={() => {}} />

      <BigText>브레드크럼</BigText>
      <LinkContainer>
        <LinkButton to="/level1">브레드크럼 가기</LinkButton>
      </LinkContainer>
    </div>
  );
}

export default TestPage;

const ToastContent = (props: { onClick: () => void; options?: any; children?: ReactNode }) => {
  return (
    <Fragment>
      {props.children}
      {/* <S.Button onClick={props.onClick}>something</S.Button> */}
    </Fragment>
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
  margin-top: 20px;
  margin-left: 5px;
`;

const TopBannerBlock = styled.div`
  width: 100%;
  overflow: hidden;
`;

const LinkContainer = styled.div`
  display: flex;
`;
const LinkButton = styled(Link)`
  margin: 20px 0;
  margin-left: 5px;
  padding: 10px 20px;
  background-color: #ffe812;
`;
