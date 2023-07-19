import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NotFound from '@pages/404';
import Error from '@pages/500';
import Detail from '@pages/Detail';
import Home from '@pages/Home';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/detail/:id'} element={<Detail />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/500'} element={<Error />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
