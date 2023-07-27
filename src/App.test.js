import { render } from '@testing-library/react';
// import App from './App';
import OrderSuccessPage from './pages/OrderSuccessPage';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("<OrderSuccessPage.jsx", () => {
  it("renders order success data", () => {
    const {getByText} = render(<OrderSuccessPage />);
    const paragraph = getByText("주문완료!");
    expect(paragraph).toHaveTextContent("주문완료!");
  })
})