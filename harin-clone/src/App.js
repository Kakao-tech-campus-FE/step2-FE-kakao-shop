import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './Pages/mainpage';
import LoginPage from './Pages/loginpage';
import RegisterPage from './Pages/registerpage';
import MainLayout from './Layouts/mainlayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <Routes>
            {/* 단독 레이아웃 */}
            <Route path='/loginpage' Component={LoginPage} />
            <Route path='/registerpage' Component={RegisterPage} />
            
            {/* 공통 레이아웃 */}
            {/* <Route exact path='/' Component={Navigation}>
              <Route path='/' Component={MainPage} />
              <Route Component={PageNotFound} />
            </Route> */}
            <Route element={<MainLayout />}>
              <Route path='/' element={<MainPage />}></Route>
            </Route>
          </Routes>
      </BrowserRouter> 
      // <ReactQueryDevtools />
    // </QueryClientProvider>

  );
};

export default App;
