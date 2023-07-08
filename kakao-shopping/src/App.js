import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import ComponentTest from './pages/ComponentTest';
import HomePage from './pages/Main';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/componentTest" element={<ComponentTest />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
};

export default App;
