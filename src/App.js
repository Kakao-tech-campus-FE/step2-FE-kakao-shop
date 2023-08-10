import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './components/pages/ProductDetailPage'
import GlobalStyles from './GlobalStyles';
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import OrderPage from "./components/pages/OrderPage";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import RequiredAuthLayout from './layouts/RequiredAuthLayout'
import OrderCompletePage from "./components/pages/OrderCompletePage";

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter> 
         <Routes>
            {/* {단독 레이아웃} */}
            <Route path={staticServerUri + "/login"} element={<LoginPage/>}/>
            <Route path={staticServerUri + "/signup"} element={<RegisterPage/>}/>
          
            {/* 공통 레이아웃 */}
            <Route element={<MainLayout/>}>
              <Route path={staticServerUri + "/"} element={<HomePage/>}/>  
              <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage/>}/>  
              {/* 사용자가 로그인됐을 때만 사용 가능한 페이지 */}
            </Route>
            
            <Route element={<RequiredAuthLayout/>}>
              <Route path={staticServerUri + "/order"} element={<OrderPage />}/>
              <Route path={staticServerUri + "/cart"} element={<CartPage />}/>
              <Route path={staticServerUri + "/orders/complete/:id"} element={<OrderCompletePage/>}/>
            </Route>
         </Routes> 
        </BrowserRouter>
       </QueryClientProvider>  
     </>
  );
}

export default App;


