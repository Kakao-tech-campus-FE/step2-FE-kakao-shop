import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import OrderSection from "../templates/OrderPage/OrderSection";

describe("주문 테스트", () => {
  it("should render OrderSection", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" Component={OrderSection} />
        </Routes>
      </MemoryRouter>
    );
  });

  it("결제 테스트", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" Component={OrderSection} />
        </Routes>
      </MemoryRouter>
    );

    const btn = screen.getByRole("button",)
  });
});
