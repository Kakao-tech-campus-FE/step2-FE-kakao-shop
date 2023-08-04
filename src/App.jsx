import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import URL from './constants/URL';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ErrorPage from './pages/ErrorPage';
import RequiredAuthLayout from './layouts/RequiredAuthLayout';
import OrderCompletePage from './pages/OrderCompletePage';

const staticServerUrl = process.env.REACT_APP_PATH || "";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router basename={staticServerUrl}>
                <Routes>
                    <Route path={URL.LOGIN} element={<LoginPage />} />
                    <Route path={URL.SIGNUP} element={<SignUpPage />} />
                    <Route path={URL.ERROR} element={<ErrorPage />} />
                    <Route element={<MainLayout />}>
                        <Route path={URL.HOME} element={<HomePage />} />
                        <Route path={URL.PRODUCT} element={<ProductDetailPage />} />
                    </Route>
                    <Route element={<RequiredAuthLayout />}>
                        <Route path={URL.CART} element={<CartPage />} />
                        <Route path={URL.ORDER} element={<OrderPage />} />
                        <Route path={URL.ORDER_COMPLETE} element={<OrderCompletePage/>} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
