import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/mainPage';
import RegisterPage from './components/pages/registerPage';
import LoginPage from './components/pages/loginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
