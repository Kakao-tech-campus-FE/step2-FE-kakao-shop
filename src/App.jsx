import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.js";

import routes from "./constants/routes.js";
import theme from "./styles/theme.js";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<div>home</div>} />
        <Route path={routes.signIn} element={<div>로그인</div>} />
        <Route path={routes.signUp} element={<div>회원가입</div>} />
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
