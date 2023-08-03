
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { RouterInfo } from "./routes/RouterInfo";
import { GlobalStyle } from "./css/globalStyles";
const RouterObject = createBrowserRouter(RouterInfo);
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={RouterObject} />
    </>
  );
}

export default App;

//기본 라우터 사용시 메인 레이아웃은 홈이나 장바구니 같은 기본 페이지들을 감싸주면 됨.

