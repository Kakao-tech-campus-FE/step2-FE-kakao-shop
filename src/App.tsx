import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from '@components/@common/ScrollToTop';

import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
