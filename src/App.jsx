import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/GlobalStyle.js";
import theme from "@/styles/theme.js";
import isLoggedInAtom from "@/storage/common/isLoggedIn.atom.js";
import router from "@/router.jsx";

function App() {
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  useEffect(() => {
    localStorage.getItem("accessToken")
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);

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
