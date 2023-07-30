import { cleanup, getByTitle, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "store/store.js";
import Layout from "components/templates/Layout";
import Order from "pages/Order";
import "index.css";

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

beforeEach(() => {
  Storage.prototype.localStorage = mockLocalStorage;
});

const queryClient = new QueryClient();

test("loads and displays greeting", async () => {
  const { queryByText, getByText, getByTitle, getAll } = render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/order" element={<Order />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );

  expect(getByText("로그인")).toBeFalsy();
});

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});
