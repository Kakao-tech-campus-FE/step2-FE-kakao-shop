import Breadcrumb from './components/Breadcrumb';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const style = {
    margin: '30px auto',
    padding: '10px 10px', 
    backgroundColor: 'white',
    width: '80vw',
  }
  return (
    <div style={style}>
      <BrowserRouter>
        <Breadcrumb style={{textAlign: 'center'}}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
