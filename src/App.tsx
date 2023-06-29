import Carousel from './components/common/Carousel';
import CheckList from './components/common/CheckList';
import Toast from './components/common/Toast';
import LinkBtn from './components/common/LinkBtn';
import BreadCrumb from './components/common/BreadCrumb';
import Toggle from './components/common/Toggle';
import { styled } from 'styled-components';
import positionObj from './constants/position';
import RadioInput from './components/common/RadioInput';

function App() {
  return (
    <Wrap>
      Home
      <h1>체크리스트</h1>
      <CheckList names={['test1', 'test2']} axis="column" bgColor="yellow" color="white" width={20} height={20} />
      <h1>토스트</h1>
      <Toast content="토스트 테스트" position={positionObj['top-right']} />
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
      <Toggle title="토글" bgColor="yellow" color="white" />
      <h1>라디오 버튼</h1>
      <RadioInput color="white" bgColor="yellow" width={20} height={20} name="테스트버튼" value="테스트1" />
      <RadioInput color="white" bgColor="yellow" width={20} height={20} name="테스트버튼" value="테스트2" />
      <RadioInput color="white" bgColor="yellow" width={20} height={20} name="테스트버튼" value="테스트3" />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  padding: 20px;
`;
