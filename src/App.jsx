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

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path={URL.LOGIN} element={<LoginPage />}></Route>
                    <Route path={URL.SIGNUP} element={<SignUpPage />}></Route>
                    <Route element={<MainLayout />}>
                        <Route path={URL.HOME} element={<HomePage />}></Route>
                        <Route path={URL.PRODUCT} element={<ProductDetailPage />}></Route>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
