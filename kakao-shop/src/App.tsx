import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Error from '@pages/500';
import Home from '@pages/Home';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/500'} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
