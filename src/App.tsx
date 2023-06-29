import Carousel from './components/common/Carousel';
import CheckList from './components/common/CheckList';
import Toast from './components/common/Toast';
import LinkBtn from './components/common/LinkBtn';
import BreadCrumb from './components/common/BreadCrumb';
import Toggle from './components/common/Toggle';
import { styled } from 'styled-components';

function App() {
  return (
    <Wrap>
      Home
      <h1>체크리스트</h1>
      <CheckList names={['test1', 'test2']} axis="column" bgColor="yellow" color="white" width={20} height={20} />
      <h1>토스트</h1>
      <Toast content="토스트 테스트" position="top-right" />
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
      <Toggle title="토글" color="yellow" />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  padding: 20px;
`;
