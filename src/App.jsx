import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/GlobalStyle.js";
import theme from "@/styles/theme.js";
import router from "@/router.jsx";
import GlobalLoader from "@/pages/GlobalLoader.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.log(error, query);
      },
    }),
  });

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <HelmetProvider>
          <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            <Suspense fallback={<GlobalLoader />}>
              <RouterProvider router={router} />
            </Suspense>
          </StyledThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
