import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import ComponentTest from './pages/ComponentTest';
import HomePage from './pages/Main';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';

const queryClient = new QueryClient();

const staticServerUrl = process.env.REACT_APP_PATH || "";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={ staticServerUrl + "/" } element={<HomePage />} />
          <Route path={ staticServerUrl + "/componentTest" } element={<ComponentTest />} />
          <Route path={ staticServerUrl + "/register" } element={<RegisterPage />} />
          <Route path={ staticServerUrl + "/login" } element={<LoginPage />} />
          <Route path={ staticServerUrl + "/main" } element={<Main />} />
          <Route path={ staticServerUrl + "/product/:id" } element={<ProductPage />} /> 
          <Route path={ staticServerUrl + "/cart" } element={<CartPage />} /> 
          <Route path={ staticServerUrl + "/order" } element={<OrderPage />} /> 
          <Route path={ staticServerUrl + "/ordercomplete" } element={<OrderCompletePage />} /> 
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
};

export default App;
