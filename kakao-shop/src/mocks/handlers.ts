import { BASE_URL } from '@apis/client';
import { rest } from 'msw';

export const handlers = [
  rest.post(`${BASE_URL}/login`, (req, res, ctx) => {
    // Persist user's authentication in the session

    return res(
      // Respond with a 200 status code
      ctx.status(404),
    );
  }),
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    return res.once(
      // Respond with a 200 status code
      ctx.status(500),
    );
  }),
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    return res.once(
      // Respond with a 200 status code
      ctx.status(500),
    );
  }),

  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    const page = Number(req.url.searchParams.get('page'));
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        response: [
          {
            id: 1 + page * 9,
            productName: '기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전',
            description: '',
            image: '/images/1.jpg',
            price: 1000,
          },
          {
            id: 2 + page * 9,
            productName: '[황금약단밤 골드]2022년산 햇밤 칼집밤700g외/군밤용/생율',
            description: '',
            image: '/images/2.jpg',
            price: 2000,
          },
          {
            id: 3 + page * 9,
            productName: '삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!',
            description: '',
            image: '/images/3.jpg',
            price: 30000,
          },
          {
            id: 4 + page * 9,
            productName: '바른 누룽지맛 발효효소 2박스 역가수치보장 / 외 7종',
            description: '',
            image: '/images/4.jpg',
            price: 4000,
          },
          {
            id: 5 + page * 9,
            productName: '[더주] 컷팅말랑장족, 숏다리 100g/300g 외 주전부리 모음 /중독성 최고/마른안주',
            description: '',
            image: '/images/5.jpg',
            price: 5000,
          },
          {
            id: 6 + page * 9,
            productName: '굳지않는 앙금절편 1,050g 2팩 외 우리쌀떡 모음전',
            description: '',
            image: '/images/6.jpg',
            price: 15900,
          },
          {
            id: 7 + page * 9,
            productName: 'eoe 이너딜리티 30포, 오렌지맛 고 식이섬유 보충제',
            description: '',
            image: '/images/7.jpg',
            price: 26800,
          },
          {
            id: 8 + page * 9,
            productName: '제나벨 PDRN 크림 2개. 피부보습/진정 케어',
            description: '',
            image: '/images/8.jpg',
            price: 25900,
          },
          {
            id: 9 + page * 9,
            productName: '플레이스테이션 VR2 호라이즌 번들. 생생한 몰입감',
            description: '',
            image: '/images/9.jpg',
            price: 797000,
          },
        ],
        error: null,
      }),
    );
  }),

  rest.post(`https://kapi.kakao.com/v1/payment/ready`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        tid: 'T1234567890123456789',
        next_redirect_app_url: 'https://mockup-pg-web.kakao.com/v1/xxxxxxxxxx/aInfo',
        next_redirect_mobile_url: 'https://mockup-pg-web.kakao.com/v1/xxxxxxxxxx/mInfo',
        next_redirect_pc_url: 'https://mockup-pg-web.kakao.com/v1/xxxxxxxxxx/info',
        android_app_scheme: 'kakaotalk://kakaopay/pg?url=https://mockup-pg-web.kakao.com/v1/xxxxxxxxxx/order',
        ios_app_scheme: 'kakaotalk://kakaopay/pg?url=https://mockup-pg-web.kakao.com/v1/xxxxxxxxxx/order',
        created_at: '2016-11-15T21:18:22',
      }),
    );
  }),
];
