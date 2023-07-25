import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import "../../styles/template/OrderTemplate.css";

const OrderTemplate = ({ data }) => {
  console.log(data);
  console.log("넘어옴");

  const { products, totalPrice } = data?.data?.response;
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: "order",
    queryFn: () => order,
  });

  // products 안에 있는 item
  // `${item.productName} - ${item.carts[0].option.optionName}`
  // 1개당 가격 : item.carts[0].price & item.carts[0].quantity

  const OrderItems = () => {
    let renderComponent = [];

    //각각 상품들
    products.forEach((item) => {
      // item: 각각의 상품. carts: 옵션들의 모임
      // 상품하나에 대한 각각의 옵션들
      renderComponent.push(
        item.carts.map((cart) => {
          return (
            <div key={cart.id} className="order-option">
              <div className="namegroup">
                <span class="material-symbols-outlined">storefront</span>
                <span className="prodcut-name">{`${item.productName}`}</span>
              </div>
              <div className="optionNamegroup">
                <span className="option-name">{`[옵션]${cart.option.optionName}`}</span>
                <span className="product-quantity">
                  {comma(cart.quantity)}개
                </span>
              </div>

              <div className="option-price">
                <span>{comma(cart.price * cart.quantity)}원</span>
              </div>
            </div>
          );
        })
      );
    });

    return renderComponent;
  };

  return (
    <div className="order-container">
      <div className="order-innerwrap">
        <div className="order-top">
          <span>주문하기</span>
        </div>

        <div className="order-delivery-info">
          <span className="info-title">배송지 정보</span>
          <span>(kakao계정정보)</span>

          <div className="delivery-customer-info">
            <span className="name">춘식이</span>
            <span className="destination">기본배송지</span>
            <p className="number">010-1234-5678</p>
            <p className="address">
              (12345)판교 카카오로 가는길 1 <br /> (쿠키즈동, 춘식팰리스)
              101-111
            </p>
          </div>
        </div>

        <div className="order-info">
          <div className="order-product-info">
            <span className="info-title">주문상품정보</span>
            {/* 각 주문 정보 */}
            <OrderItems />
            <div className="order-total-price">
              <span>총 주문 금액</span>
              <span className="won">{comma(totalPrice)}원</span>
            </div>
          </div>
        </div>

        <div className="order-info">
          <div className="order-agree">
            <div className="agree-title">
              <input type="checkbox" id="agree-all" className="check" />
              <label htmlFor="agree-all">
                <span>전체 동의</span>
              </label>
            </div>

            <div className="agree-group">
              <div className="check">
                <input type="checkbox" id="agree-1" />
                <label htmlFor="agree-1">
                  <span> 구매조건 확인 및 결제 진행 동의</span>
                </label>
              </div>
              <div className="check">
                <input type="checkbox" id="agree-2" />
                <label htmlFor="agree-2">
                  <span> 개인정보 제3자 제공 동의</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="order-bottom">
          <div className="legal-notice">
            <span>법적고지</span>
            <br />
            <span>
              (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
              포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
              통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
              및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
            </span>
          </div>
          <button
            className="checkout-btn"
            onClick={() => {
              mutate(null, {
                onError: () => {
                  alert("주문에 실패했습니다🥲");
                },
                onSuccess: (res) => {
                  const id = res.response.id;
                  alert("주문이 완료되었습니다!😉");
                  navigate(`/orders/complete/${id}`);
                },
              });
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderTemplate;
