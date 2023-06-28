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
    </div>
  );
}

export default App;
