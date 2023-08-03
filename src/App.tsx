import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from '@components/@common/ScrollToTop';

import Router from './Router';

const staticServerUrl = process.env.REACT_APP_PATH || '';

function App() {
  return (
    <BrowserRouter basename={`${staticServerUrl}`}>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
