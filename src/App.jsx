import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/GlobalStyle.js";
import theme from "@/styles/theme.js";
import router from "@/router.jsx";
import GlobalLoader from "@/pages/GlobalLoader.jsx";

function App() {
  return (
    <HelmetProvider>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<GlobalLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </StyledThemeProvider>
    </HelmetProvider>
  );
}

export default App;
