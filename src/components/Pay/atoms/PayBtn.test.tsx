import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PayBtn from './PayBtn';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../../api/Pay', () => {
  const mockData = {
    success: true,
    response: {
      id: 2,
      products: [
        {
          productName: '기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전',
          items: [
            {
              id: 4,
              optionName: '2겹 식빵수세미 6매',
              quantity: 3,
              price: 26700,
            },
          ],
        },
        {
          productName: '삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!',
          items: [
            {
              id: 5,
              optionName: 'JR310BT (무선 전용) - 레드',
              quantity: 4,
              price: 199600,
            },
            {
              id: 6,
              optionName: 'JR310BT (무선 전용) - 그린',
              quantity: 5,
              price: 249500,
            },
          ],
        },
      ],
      totalPrice: 475800,
    },
    error: null,
  };
  return jest.fn().mockResolvedValue(mockData);
});

describe('결제 버튼 테스트', () => {
  const queryClient = new QueryClient();
  //Pay API 요청 모킹

  // jest.fn().mockRejectedValue({error:'something wrong'})
  it('navigating test', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <PayBtn approved={true} />
        </MemoryRouter>
      </QueryClientProvider>
    );
    fireEvent.click(screen.getByText('결제하기'));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/paySuccess');
    });
  });
});
