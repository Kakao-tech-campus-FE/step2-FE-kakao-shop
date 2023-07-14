import { Outlet } from 'react-router-dom';
import GNB from './components/molecules/GNB';

function App() {
  return (
    <>
      <GNB />
      <Outlet />
    </>
  );
}

export default App;
