import { render, screen } from "@testing-library/react";
import OrderSuccessPage from "../pages/OrderSuccessPage"

test("renders '주문완료!'", () => {
  render(<OrderSuccessPage />);

  const successMsg = screen.getAllByText("주문");
  expect(successMsg).toHaveTextContent("주문완료!");
})