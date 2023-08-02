/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';

export const handlers = [
  rest.post('/orders/save', (req, res, ctx) => {
    const testCart = '상품 있음';
    if (!testCart) {
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          response: null,
          error: {
            message: '장바구니에 아무 내역도 존재하지 않습니다',
            status: 404,
          },
        }),
      );
    }

    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      return res(
        ctx.status(401),
        ctx.json({ success: false, response: null, error: { message: '인증되지 않았습니다', status: 401 } }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
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
      }),
    );
  }),
  rest.get('/carts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: {
          products: [
            {
              id: 1,
              productName: '기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전',
              carts: [
                {
                  id: 1,
                  option: {
                    id: 5,
                    optionName: '2겹 식빵수세미 6매',
                    price: 8900,
                  },
                  quantity: 3,
                  price: 26700,
                },
              ],
            },
            {
              id: 3,
              productName: '삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!',
              carts: [
                {
                  id: 2,
                  option: {
                    id: 10,
                    optionName: 'JR310BT (무선 전용) - 레드',
                    price: 49900,
                  },
                  quantity: 4,
                  price: 199600,
                },
                {
                  id: 3,
                  option: {
                    id: 11,
                    optionName: 'JR310BT (무선 전용) - 그린',
                    price: 49900,
                  },
                  quantity: 5,
                  price: 249500,
                },
              ],
            },
          ],
          totalPrice: 475800,
        },
        error: null,
      }),
    );
  }),
];
