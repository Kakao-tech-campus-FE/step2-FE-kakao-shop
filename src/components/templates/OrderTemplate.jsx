import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import SelectBox from "../atoms/SelectBox";
import { order } from "../../services/order";
import { useMutation } from "react-query";
import { ToastContext } from "../../App";

const OrderTemplate = ({ data }) => {
  const { products, totalPrice } = data?.data?.response;

  const { mutate } = useMutation({
    mutationFn: order,
    mutationKey: "order",
  });

  const navigate = useNavigate();

  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  const handleOnClickAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePolicy(value);
  };

  const handleAgreement = (e) => {
    const { name, checked } = e.target;
    if (name === "agreePayment") {
      setAgreePayment(checked);
    }
    if (name === "agreePolicy") {
      setAgreePolicy(checked);
    }
  };

  const { showToast } = useContext(ToastContext);
  const [selectBoxValue, setSelectBoxValue] = useState("");
  const handleOnChangeSelectBox = (e) => {
    setSelectBoxValue(e.target.value);
  };

  const handleOnClickOrder = () => {
    if (!agreePayment || !agreePolicy) {
      showToast("동의하지 않은 항목이 있습니다.");
      return;
    }
    console.log("mutate", mutate);
    mutate(null, {
      onSuccess: (res) => {
        alert("주문이 완료되었습니다.");
        const id = res.data.response.id;
        navigate(`/order/complete/${id}`);
      },
      onError: (error) => {
        switch (error.response.status) {
          case 500:
            alert("서버에러가 발생하였습니다. 잠시 후 다시 시도해주세요.");
            break;
          case 401:
            alert("인증이 만료되었습니다. 로그인이 필요합니다.");
            navigate("/login");
            break;
          case 404:
            alert("장바구니에 상품이 존재하지 않습니다. 상품을 추가해주세요.");
            break;
          case 400:
            alert("요청이 올바르지 않습니다.");
            break;
          default:
            alert("문제가 발생하였습니다. 다시 시도해주세요.");
            break;
        }
      },
    });
  };

  const OrderItems = () =>
    products?.map((item) =>
      item.carts
        .filter((cart) => cart.quantity !== 0)
        .map((cart) => (
          <div
            key={cart.id}
            className={
              "flex flex-col items-start gap-2 border border-gray-300 p-4 text-gray-700"
            }
          >
            <div className={"order-product-name text-left font-bold"}>
              <span>{`${item.productName} - ${cart.option.optionName}`}</span>
            </div>
            <div className={"product-quantity text-sm"}>
              <span>{comma(cart.quantity)}개</span>
            </div>
            <div className={"order-product-price"}>
              <span>{comma(cart.price)}원</span>
            </div>
          </div>
        )),
    );

  return (
    <div
      className={
        "order-template mx-auto flex w-[100%] max-w-4xl flex-col gap-2"
      }
    >
      <div className={"flex h-20 items-center justify-center"}>
        <h1 className={"text-4xl font-bold"}>주문하기</h1>
      </div>
      <div className={"delivery-info border border-gray-300 px-10 pb-10"}>
        <div className={"border-b border-b-gray-300 p-4"}>
          <h2 className={"text-2xl font-bold"}>배송지 정보</h2>
        </div>
        <div className={"flex flex-col"}>
          <div className={"flex items-center gap-2 p-4"}>
            <span className={"text-lg"}>박동진</span>
            <span
              className={
                "badge rounded-md bg-blue-100 p-1 text-sm text-blue-400"
              }
            >
              기본배송지
            </span>
          </div>
          <input
            type={"text"}
            className={"border-b border-b-gray-300 px-4 py-2 font-semibold"}
            placeholder={"휴대폰 번호 '-' 제외"}
          />
          <input
            type={"text"}
            className={"border-b border-b-gray-300 px-4 py-2"}
            placeholder={"주소"}
          />
          <input
            type={"text"}
            className={"border-b border-b-gray-300 px-4 py-2"}
            placeholder={"상세주소"}
          />
          <SelectBox
            className={"border-b border-b-gray-300 px-3 py-2"}
            options={[
              {
                label: "배송 전 연락바랍니다.",
                value: "배송 전 연락바랍니다.",
              },
              {
                label: "부재 시 경비실에 맡겨주세요",
                value: "부재 시 경비실에 맡겨주세요.",
              },
              {
                label: "부재 시 문 앞에 놓아주세요",
                value: "부재 시 문 앞에 놓아주세요.",
              },
              { label: "부재 시 연락주세요", value: "부재 시 연락주세요." },
              { label: "직접 입력", value: "" },
            ]}
            defaultValue={5}
            onChange={handleOnChangeSelectBox}
          />
          <input
            type={"text"}
            className={"border-b border-b-gray-300 px-4 py-2"}
            placeholder={"배송 메모"}
            onChange={handleOnChangeSelectBox}
            value={selectBoxValue}
          />
        </div>
      </div>
      <div className={"flex flex-col gap-4 border border-gray-300 px-4 pb-10"}>
        <h2 className={"p-4 text-2xl font-bold"}>주문상품 정보</h2>
        <OrderItems />
      </div>
      <div
        className={
          "flex items-center justify-between border border-gray-300 p-4"
        }
      >
        <h3 className={"text-xl font-bold"}>총 주문 금액</h3>
        <span className={"tobal-price text-xl font-bold text-blue-400"}>
          {comma(totalPrice)}원
        </span>
      </div>
      <div className={"flex flex-col border border-gray-300"}>
        <div className={"check-box-container px-4 pb-4"}>
          <div
            className={
              "flex items-center gap-2 border-b border-b-gray-300 py-4"
            }
          >
            <input
              type={"checkbox"}
              id={"all-agree"}
              ref={allAgreeRef}
              checked={agreePayment && agreePolicy}
              onChange={handleOnClickAllAgree}
            />
            <label htmlFor={"all-agree"} className={"text-xl font-bold"}>
              전체 동의
            </label>
          </div>
          <div className={"check-boxes flex flex-col gap-4 py-4"}>
            <div className={"flex gap-2"}>
              <input
                type={"checkbox"}
                id={"agree"}
                ref={agreePaymentRef}
                checked={agreePayment}
                onChange={handleAgreement}
                name={"agreePayment"}
              />
              <label htmlFor={"agree"} className={"text-md"}>
                구매조건 확인 및 결제 진행 동의
              </label>
            </div>
            <div className={"flex gap-2"}>
              <input
                type={"checkbox"}
                id={"policy"}
                ref={agreePolicyRef}
                checked={agreePolicy}
                name={"agreePolicy"}
                onChange={handleAgreement}
              />
              <label htmlFor={"policy"} className={"text-md"}>
                개인정보 제 3자 제공동의
              </label>
            </div>
            <div className={"low-info text-justify"}>
              <span className={" block text-sm font-bold text-gray-700"}>
                법적고지
              </span>
              <span className={"text-xs text-gray-500"}>
                (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는
                상품이 포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해
                (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며
                상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각
                판매자에게 있습니다.
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={handleOnClickOrder}
          className={`order-button w-full py-4 text-center text-2xl font-bold ${
            agreePayment && agreePolicy
              ? "cursor-pointer bg-kakao-yellow text-black"
              : "bg-grey-300 cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default OrderTemplate;
