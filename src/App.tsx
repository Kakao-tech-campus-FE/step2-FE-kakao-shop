import Carousel from './components/common/Carousel';
import CheckList from './components/common/CheckList';
import Toast from './components/common/Toast';

function App() {
  return (
    <div className="App">
      Home
      <h1>체크리스트</h1>
      <CheckList names={['test1', 'test2']} axis="column" />
      <h1>토스트</h1>
      <Toast content="토스트 테스트" position="top-right" />
      <h1>캐러셀</h1>
      <Carousel
        width={300}
        height={300}
        images={['https://picsum.photos/300/300', 'https://picsum.photos/300/300', 'https://picsum.photos/300/300']}
      ></Carousel>
    </div>
  );
}

export default App;
