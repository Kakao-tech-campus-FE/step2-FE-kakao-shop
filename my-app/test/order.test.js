import React from "react";
import { render, screen } from "@testing-library/react";
import OrderPage from "../src/pages/OrderPage";

describe("Order test", () => {
  it(
    ("order success",
    () => {
      render(<OrderPage />);

      const target = screen.getByRole("button", { name: "결제하기" });
      userEvent.click(target);

      expect(screen.getByText()).toBeTruthy();
    })
  );
});
