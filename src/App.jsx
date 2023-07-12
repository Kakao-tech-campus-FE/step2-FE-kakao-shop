import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/GlobalStyle.js";
import theme from "@/styles/theme.js";
import router from "@/router.jsx";

function App() {
  return (
    <HelmetProvider>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </StyledThemeProvider>
    </HelmetProvider>
  );
}

export default App;
