import { render, screen } from '@testing-library/react';
import App from './App';
import LoginForm from './component/organisms/LoginForm';
import RegisterPage from './pages/RegisterPage';
import OrderCompletePage from './pages/OrderCompletePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('+', () => {
  expect(1+1).toBe(2);
})

test('로그인 페이지', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('회원가입 페이지', () => {
  render(<RegisterPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('홈 화면', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('장바구니 페이지', () => {
  render(<CartPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('주문 완료 페이지', () => {
  render(<OrderPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('결제 완료 페이지', () => {
  render(<OrderCompletePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




