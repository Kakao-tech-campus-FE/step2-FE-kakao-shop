import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainLayout from "./components/templates/MainLayout";
import {QueryClient, QueryClientProvider} from "react-query";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import {ErrorType} from "./services/type";
import PaymentPage from "./pages/PaymentPage";
import OrderedPage from "./pages/OrderedPage";
import {convertUrl} from "./const";

const queryClient = new QueryClient()


function App() {
    const notFound = new ErrorType({message: "찾을 수 없는 페이지 입니다.", status: 404});

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={convertUrl("/login")} element={<LoginPage/>}/>
                        <Route path={convertUrl("/signup")} element={<SignUpPage/>}/>
                        <Route element={<MainLayout/>}>
                            <Route path={convertUrl('/')} element={<MainPage/>}/>
                            <Route path={convertUrl('/cart')} element={<CartPage/>}/>
                            <Route path={convertUrl('/product/:productId')} element={<ProductPage/>}/>
                            <Route path={convertUrl('/payment')} element={<PaymentPage/>}/>
                            <Route path={convertUrl('/ordered/:orderedId')} element={<OrderedPage/>}/>
                        </Route>
                        <Route path='/*'
                               element={<ErrorPage error={notFound}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    );
}

export default App;
