import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import OrderPage from '../../pages/OrderPage';
import { server } from '../../mocks/server';
import { handlers } from '../../mocks/handlers';
import { staticUrl } from '../../utils/convert';

describe('Order', () => {
  it('결제하기 버튼 있는가?', async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          suspense: false,
        },
      },
    });

    server.use(handlers[1]);

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[staticUrl('/order')]}>
          <Routes>
            <Route path={staticUrl('/order')} element={<OrderPage />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      const paymentButton = getByTestId('order-button');
      expect(paymentButton).toBeInTheDocument();
    });
  });
});
