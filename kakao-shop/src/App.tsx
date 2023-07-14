import { Route, Routes, BrowserRouter } from 'react-router-dom';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
