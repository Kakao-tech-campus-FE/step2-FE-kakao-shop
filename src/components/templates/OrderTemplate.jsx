import { useMutation } from "react-query";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import { useRef, useState } from "react";
import Photo from "../atoms/Photo";
import { pgpay } from "../../services/pgpay";

const OrderTemplate = ({ data }) => {
  const { products, totalPrice } = data?.data?.response;
  const { mutate } = useMutation({
    mutationFn: () => {
      return order();
    },
  });
  const { mutate: pgMutate } = useMutation({
    mutationFn: pgpay,
    onSuccess: (res) => {
      //console.log(res);
    },
  });
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const allAgreeRef = useRef(null);
  const paymentRef = useRef(null);
  const policyRef = useRef(null);
  const navigate = useNavigate();
  const handleAllAgree = (e) => {
    if (e.target.checked) {
      setAgreePolicy(true);
      setAgreePayment(true);
    } else {
      setAgreePolicy(false);
      setAgreePayment(false);
    }
  };
  const handleOnPay = () => {
    if (!agreePayment || !agreePolicy) {
      return alert("모든 동의가 필요합니다.");
    }
    mutate(null, {
      onSuccess: (res) => {
        alert("주문 완료되었습니다.");
        navigate(`/orders/complete/${res.data.response.id}`);
      },
      onError: (e) => {
        console.log(e);
        if (e?.error?.status === 404) {
          //정상적으로 요청이 보내지지만 장바구니에 내역이 없을 경우
          alert("장바구니에 아무 내역도 존재하지 않습니다");
          navigate("/");
        } else if (e?.error?.status === 401) {
          //인증 정보가 아예 없을 경우
          alert("인증되지 않았습니다.");
          navigate("/login");
        } else if (e?.status === 500) {
          //토큰이 유효하지 않거나 서버에 문제가 있는경우 객체에 바로 error, status가 담김
          alert("서버에 문제가 있거나 인증이 만료되었습니다.");
          navigate("/login");
        }
      },
    });
  };
  const handleAgreement = (e) => {
    const { id, checked } = e.target;
    if (id === "agree") {
      setAgreePayment(checked);
    } else if (id === "policy") {
      setAgreePolicy(checked);
    }
  };

  const OrderItems = () => {
    let renderComponents = [];
    if (Array.isArray(products) === true) {
      products.forEach((item) => {
        renderComponents.push(
          item.carts.map((cart) => {
            if (cart.quantity === 0) return null;
            return (
              <div key={cart.id} className="border-t flex flex-col gap-2 p-4">
                <div className="product-name font-bold flex place-content-center">
                  <div className=" gap-4 w-[100px] h-[100px]">
                    <Photo
                      src={`/images/${item.id}.jpg`}
                      alt={`${item.id}`}
                      className="rounded-md"
                    />
                  </div>
                  <span className="ml-4 mt-8 block">{`${item.productName} - ${cart.option.optionName}`}</span>
                </div>
                <div className="quantity">
                  <span>{comma(cart.quantity)}개</span>
                </div>
                <div className="price font-bold">
                  <span>{comma(cart.quantity * cart.option.price)}원</span>
                </div>
              </div>
            );
          })
        );
      });
    }
    return renderComponents;
  };
  return (
    <div className="mx-auto max-w-[1200px] w-[100%] h-full block">
      <div className="border block p-2 flex">
        <h1 className="text-sm font-bold block">주문하기</h1>
      </div>
      <div className="border p-4 flex">
        <h2 className="text-sm  font-bold block">배송지 정보</h2>
      </div>
      <div className="border p-4">
        <div className="name">
          <div className="flex items-center gap-4">
            <span>홍길동</span>
            <span className="badge text-blue-400 bg-slate-100 rounded-md text-xs p-1">
              기본 배송지
            </span>
          </div>
        </div>
      </div>
      <div className="border p-4 flex">
        <span className="text-sm block">010-0000-000</span>
      </div>
      <div className="border p-4 flex">
        <span className="text-sm block">서울시 강남구 도곡동 000-0</span>
      </div>
      <div className="border p-4 flex">
        <h2 className="">주문상품 정보</h2>
      </div>
      {/*각 주문의 정보 */}
      <OrderItems />

      <div className="border p-4 flex items-center justify-between">
        <h3 className="font-bold text-xl">배송 금액</h3>
        <div className="flex gap-2">
          <span className="badge text-blue-400 bg-slate-100 block bt-2 rounded-md text-xs p-1">
            무료 배송
          </span>
          <span className="font-bold text-xl text-indigo-500">0원</span>
        </div>
      </div>
      <div className="border p-4 flex items-center justify-between">
        <h3 className="font-bold text-xl">총 주문 금액</h3>
        <span className="price font-bold text-xl text-indigo-500">
          {comma(totalPrice)}원
        </span>
      </div>
      <div className="border flex flex-col p-4 gap-2">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="all-agree"
            ref={allAgreeRef}
            checked={agreePayment && agreePolicy}
            onChange={handleAllAgree}
          />
          <label htmlFor="all-agree" className="text-xl font-bold ">
            전체 동의
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="agree"
            ref={paymentRef}
            checked={agreePayment}
            onChange={handleAgreement}
          />
          <label htmlFor="agree" className="text-sm">
            구매조건 확인 및 결제 진행 동의
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="policy"
            ref={policyRef}
            checked={agreePolicy}
            onChange={handleAgreement}
          />
          <label htmlFor="policy" className="text-sm">
            개인정보 제 3자 제공 동의
          </label>
        </div>
        <button
          onClick={
            handleOnPay
            /*pgMutate(
              {
                cid: "TC0ONETIME",
                partner_order_id: "partner_order_id",
                partner_user_id: "partner_user_id",
                item_name: products.map((item) => item.productName).join(","),
                quantity: 1,
                total_amount: totalPrice,
                tax_free_amount: 0,
                approval_url: "http://localhost:3000/",
                cancel_url: "http://localhost:3000/carts",
                fail_url: "http://localhost:3000/carts",
              }

              //
            );*/
          }
          className={
            agreePayment && agreePolicy
              ? "bg-yellow-500 w-full p-4 font-medium text-black"
              : "bg-gray-300 w-full p-4 font-medium text-gray-500"
          }
        >
          결제하기
        </button>
      </div>
    </div>
  );
};
export default OrderTemplate;
