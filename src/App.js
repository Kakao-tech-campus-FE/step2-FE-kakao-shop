import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GNB from "./components/organisms/GNB";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import DetailPage from "./pages/DetailPage";
import PageContainer from "./components/atoms/PageContainer";
import Test from "./components/organisms/Test";
import Loader from "./components/molecules/Loader";
import {
  QueryClient,
  QueryCache,
  useIsFetching,
  QueryClientProvider,
} from "react-query";

function App() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        console.log(`Something went wrong: ${error.message}`);
      },
    }),
  });
  const isFetching = useIsFetching();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <PageContainer>
          <GNB></GNB>
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/products/:id" element={<DetailPage />} />
          </Routes>
          {isFetching ? <Loader /> : null}
        </PageContainer>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
