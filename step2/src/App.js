import { BrowserRouter } from 'react-router-dom';

import Router from './routes/Router';
import Examples from './Examples';
import GNB from './components/organisms/GNB';

const App = () => {


  return (
    <BrowserRouter>
      <GNB />
      <Router />
      {/* <Examples /> */}
    </BrowserRouter>
  );
};

export default App;
