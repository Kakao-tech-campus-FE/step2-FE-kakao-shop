import { render, screen, waitFor } from "@testing-library/react";
import { rest, setupWorker } from "msw";
import { MemoryRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderCompletePage from "../src/pages/OrderCompletePage";

const queryClient = new QueryClient();

const server = setupWorker(
  rest.get("/order/:id", (req, res, ctx) => {
    const { id } = req.params;
    // 여기에서 적절한 모의 데이터를 반환합니다.
    return res(ctx.json({ orderId: id }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});
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

test("결제 실패시 에러 메시지가 렌더링되는지 확인", async () => {
  // 모의 서버 응답 설정 (결제 실패를 모의)
  server.use(
    rest.get("/order/:id", (req, res, ctx) => {
      return res(ctx.status(400));
    })
  );

  const orderId = "test-failed-order-id";
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

  // 에러 메시지가 렌더링되는지 확인
  await waitFor(() => {
    expect(screen.getByText("결제에 실패했습니다.")).toBeInTheDocument();
  });
});
