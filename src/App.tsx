import { useState } from 'react';
import Carousel from './components/common/Carousel';
import CheckList from './components/common/CheckList';
import ToastBox from './components/common/ToastBox';
import { type IToastData } from './components/common/ToastBox';
import LinkBtn from './components/common/LinkBtn';
import BreadCrumb from './components/common/BreadCrumb';
import Toggle from './components/common/Toggle';
import { styled } from 'styled-components';
import RadioInput from './components/common/RadioInput';
import { createPortal } from 'react-dom';

function App() {
  const [toastContents, setToastContents] = useState<IToastData[]>([]);
  return (
    <Wrap>
      <h1>체크리스트</h1>
      <CheckList
        datas={[
          { name: 'test', value: 'test1' },
          { name: 'test', value: 'test2' },
        ]}
        axis="column"
        bgcolor="yellow"
        color="white"
        width={20}
        height={20}
      />
      <h1>토스트</h1>
      <button onClick={() => setToastContents((prev) => [...prev, { content: '토스트 테스팅 컨텐츠입니다', id: Date.now() }])}>토스트 테스팅</button>
      {toastContents.length
        ? createPortal(
            <ToastBox contents={toastContents} position="bottom-right" setToastContents={setToastContents} bgcolor="black" color="white" />,
            document.body
          )
        : null}
      <h1>캐러셀</h1>
      <Carousel
        width={300}
        height={300}
        images={['https://picsum.photos/300/300', 'https://picsum.photos/300/300', 'https://picsum.photos/300/300']}
      ></Carousel>
      <h1>브레드크럼</h1>
      <BreadCrumb />
      <LinkBtn to="./products" content="상품 페이지" />
      <h1>토글</h1>
      <Toggle title="토글" bgcolor="yellow" color="white" width={100} height={50} onChange={() => {}} />
      <h1>라디오 버튼</h1>
      <RadioInput color="white" bgcolor="yellow" width={20} height={20} name="테스트버튼" value="테스트1" />
      <RadioInput color="white" bgcolor="yellow" width={20} height={20} name="테스트버튼" value="테스트2" />
      <RadioInput color="white" bgcolor="yellow" width={20} height={20} name="테스트버튼" value="테스트3" />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
