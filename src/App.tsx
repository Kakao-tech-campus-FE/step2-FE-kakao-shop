import GNB from './components/common/molecules/GNB';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GNB />
      <Wrap>
        <Outlet />
      </Wrap>
    </>
  );
}

export default App;

const Wrap = styled.div`
  padding: 100px 30px 30px 30px;
`;
