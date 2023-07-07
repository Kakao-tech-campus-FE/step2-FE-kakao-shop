import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle.js";
import routes from "./constants/routes.js";
import theme from "./styles/theme.js";
import isLoggedInAtom from "./storage/common/isLoggedIn.atom.js";

import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";

function AppRouter() {
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  useEffect(() => {
    localStorage.getItem("accessToken")
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, [localStorage]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.signIn} element={<SignIn />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </StyledThemeProvider>
    </HelmetProvider>
  );
}

export default App;
