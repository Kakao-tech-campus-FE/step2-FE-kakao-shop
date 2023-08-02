import { comma } from '../utils/comma';
import { removeEmptyCarts } from '../utils/filterCartData';

describe('유틸리티 함수 테스트', () => {
  it('comma()에 숫자를 넣으면 자릿수 콤마가 포함된 문자열로 반환된다.', () => {
    // given
    const productPrice = 1000;

    // when
    const productPriceString = comma(productPrice);

    // then
    expect(productPriceString).toBe('1,000');
  });

  it('removeEmptyCarts()에 장바구니 목록을 넣으면 빈 옵션이 제거되어 반환된다.', () => {
    // given
    const mockCartData = {
      products: [{
        id: 1,
        productName: '기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전',
        carts: [{
          id: 1,
          option: {
            id: 5,
            optionName: '2겹 식빵수세미 6매',
            price: 8900,
          },
          quantity: 0,
          price: 0,
        }],
      }, {
        id: 3,
        productName: '삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!',
        carts: [{
          id: 2,
          option: {
            id: 10,
            optionName: 'JR310BT (무선 전용) - 레드',
            price: 49900,
          },
          quantity: 0,
          price: 0,
        }, {
          id: 3,
          option: {
            id: 11,
            optionName: 'JR310BT (무선 전용) - 그린',
            price: 49900,
          },
          quantity: 5,
          price: 249500,
        }],
      }],
      totalPrice: 249500,
    };

    // when
    const removedCartData = removeEmptyCarts(mockCartData);

    // then
    expect(removedCartData).toEqual({
      products: [{
        id: 3,
        productName: '삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!',
        carts: [{
          id: 3,
          option: {
            id: 11,
            optionName: 'JR310BT (무선 전용) - 그린',
            price: 49900,
          },
          quantity: 5,
          price: 249500,
        }],
      }],
      totalPrice: 249500,
    });
  });
});
