import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './components/pages/ProductDetailPage'
import GlobalStyles from './GlobalStyles';
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter> 
         <Routes>
            {/* {단독 레이아웃} */}
            <Route path="/login" element={<LoginPage/>}></Route>    
            <Route path="/signup" element={<RegisterPage/>}></Route> 
          
            {/* 공통 레이아웃 */}
            <Route element={<MainLayout/>}>
             <Route path="/" element={<HomePage/>}></Route>   
             <Route path="/product/:id" element={<ProductDetailPage/>}></Route>   
             <Route path="/cart" element={<CartPage/>}></Route> 
           </Route>
         </Routes> 
        </BrowserRouter>
       </QueryClientProvider>  
     </>
  );
}

export default App;


