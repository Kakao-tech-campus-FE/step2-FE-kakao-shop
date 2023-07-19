import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import MainPage from './components/pages/mainPage';
import RegisterPage from './components/pages/registerPage';
import LoginPage from './components/pages/loginPage';
import ProductListPage from './components/pages/mainProductListPage';
import { store } from './store';
import MainLayout from './components/layouts/mainLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* 단독 레이아웃 */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* 공통 레이아웃 */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/product" element={<ProductListPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
