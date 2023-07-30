import { render, waitFor, screen } from "@testing-library/react";
import { rest, setupWorker } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route } from "react-router-dom";
import OrderCompletePage from "../src/pages/OrderCompletePage";

const server = setupWorker(
  rest.get("/order/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json({ orderId: id }));
  })
);

const queryClient = new QueryClient();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("OrderCompletePage 컴포넌트가 정상적으로 렌더링되는지 확인", async () => {
  const orderId = "test-order-id";
  const testPath = `/order/${orderId}`;

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[testPath]}>
        <Route path="/order/:id">
          <OrderCompletePage />
        </Route>
      </MemoryRouter>
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText(`주문번호: ${orderId}`)).toBeInTheDocument();
  });
});
